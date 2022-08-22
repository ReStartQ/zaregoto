const { EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');
const jikanjs = require('@mateoaranda/jikanjs');

module.exports.fetchAnime = async(message, myOption, myType) => {
    if(jikanSecondCounter>0&&jikanMinuteCounter>0){
        jikanMinuteCounter-=1;
        jikanSecondCounter-=1;
        try {
            let anime = await jikanjs.search('anime', myOption, 25); 
            console.log(anime);

            const exampleEmbed2 = new EmbedBuilder()
            .setColor(0x2C3E50)
            .setTitle('Anime \n')
            .setDescription('*Set the option for* **/anime [name]**.\n'+
                            '__**Example:**__ \n'+
                            '*The usage of* `name:` *indicates that the option has been selected or autocompleted.* \n' +
                            '**/anime** `name: Bakemonogatari`\n\n'+
                            '*The following results are based off the name that you provided:* ' + '**'+ myOption +'**'+ '\n')
            .setFooter({ text: 'Only shows up to the first 25 anime results. \n' + 'For more accurate results, be specific with the anime name.'});
            
            if(anime.data[0]===undefined){
                console.log('not found');
                throw 'ANIME NOT FOUND';
            }

            let myIndex = 0;
            let myMapFlag = false;


            anime.data.map((data, index)=>{
                exampleEmbed2.addFields(	
                    {   
                        name: 'Name:', 
                        value: '`' + data.title + '`' 
                    },
                )
                if(data.title.toLocaleLowerCase()==myOption.toLocaleLowerCase()&&myMapFlag==false){
                    myIndex=index;
                    myMapFlag=true;
                }
                else if(data.title.toLocaleLowerCase().includes(myOption)&&myMapFlag==false){
                    myIndex=index;
                }
                else if(data.title.toLocaleLowerCase()==myOption.toLocaleLowerCase()&&myMapFlag==true){ //check for duplicates and if so, go with more popular one (lower number)
                    let tempPopularity = data.popularity;
                    let currentPopularity = anime.data[myIndex].popularity;
                    
                    if(currentPopularity==null){
                        currentPopularity=0;
                    }
                    if(tempPopularity==null){
                        tempPopularity=0;
                    }
                    if(tempPopularity<currentPopularity){
                        if(tempPopularity==0){
                            //nothing
                        }
                        else{
                            myIndex=index;
                        }
                    }
                    
                }
            });

            let myGenreArray=[];
            let NSFWflag=false;
            anime.data[myIndex].genres.map(genre=>{
                myGenreArray.push(genre.name);
            });

            //check for hentai or erotica
            if(myGenreArray.includes('Hentai')||myGenreArray.includes('Erotica')){
                NSFWflag=true;
            }

            let synopsis=anime.data[myIndex].synopsis;
            if(synopsis==null){
                synopsis='No information available';
            }
            let status=anime.data[myIndex].status;
            if(status==null){
                status='N/A';
            }
            let url = anime.data[myIndex].url;
            let title = anime.data[myIndex].title;
            let image = anime.data[myIndex].images.jpg.image_url;
            let genres = '';
            anime.data[myIndex].genres.map(data=>{
                if(genres==''){
                    genres+=data.name;
                }
                else{
                    genres+=", " + data.name;
                }
            });
            if(anime.data[myIndex].genres.length==0){
                genres='Unknown';
            }
            let episodes = "0";
            if(anime.data[myIndex].episodes==null){
                episodes='?';
            }
            else{
                episodes = anime.data[myIndex].episodes.toString();
            }

            let season = '';
            if(anime.data[myIndex].season==null&&anime.data[myIndex].year==null){
                season = 'Unknown'
            }
            else if(anime.data[myIndex].season==null){
                season = anime.data[myIndex].year;
            }
            else if(anime.data[myIndex].year==null){
                season = anime.data[myIndex].season.charAt(0).toUpperCase() + anime.data[myIndex].season.slice(1);
            }
            else{
                season = anime.data[myIndex].season.charAt(0).toUpperCase() + anime.data[myIndex].season.slice(1) + " " + anime.data[myIndex].year.toString();
            }

            let studios = '';

            anime.data[myIndex].studios.map(data=>{
                if(studios==''){
                    studios+=data.name;
                }
                else{
                    studios+=", " + data.name;
                }
            });
            if(anime.data[myIndex].studios.length==0){
                studios='Unknown';
            }

            let source = '';
            if(anime.data[myIndex].source==null){
                source = 'Unknown';
            }
            else{
                source = anime.data[myIndex].source;
            }

            let score = '';
            if(anime.data[myIndex].score==null){
                score='N/A';
            }
            else{
                score = anime.data[myIndex].score.toString();
            }

            let rank = '';
            if(anime.data[myIndex].rank==null){
                rank='N/A';
            }
            else{
                rank = anime.data[myIndex].rank.toString();
            }

            let popularity = '';
            if(anime.data[myIndex].popularity==null){
                popularity='N/A';
            }
            else{
                popularity = anime.data[myIndex].popularity.toString();
            }
            

            const exampleEmbed = new EmbedBuilder()
            .setColor(0x206694)
            .setThumbnail(image)
            .setTitle(title)
            .setURL(url)
            .setDescription(synopsis)
            .addFields(
                {   
                    name: 'Episodes', 
                    value: episodes, 
                    inline: true 
                },
                {   
                    name: 'Status', 
                    value: status, 
                    inline: true 
                },
                {   
                    name: 'Season', 
                    value: season, 
                    inline: true 
                },
                {   
                    name: 'Score', 
                    value: score, 
                    inline: true 
                },
                {   
                    name: 'Studio', 
                    value: studios, 
                    inline: true 
                },
                {   
                    name: 'Source', 
                    value: source, 
                    inline: true 
                },
                {   
                    name: 'Genres', 
                    value: genres, 
                    inline: true 
                },
            );

            if (message.channel.nsfw) {
                console.log("This channel is NSFW.");
            }
            else if(message.channel.nsfw===false && NSFWflag===true){
                console.log("This channel is SFW.");
                throw "NSFW";
            }


            if(myMapFlag){
                if(myType===0){
                    message.channel.send(
                        {embeds:[exampleEmbed]}
                    );
                }
                else{
                    message.reply({embeds:[exampleEmbed]});
                }
            }
            else{
                if(myType===0){
                    message.channel.send(
                        {embeds:[exampleEmbed2]}
                    );
                }
                else{
                    message.reply({embeds:[exampleEmbed2]});
                }
            }

        } catch (error) {
            //console.log('Media lookup not found');
            console.log(error);
            if(error=='NSFW'){
                if(myType===0){
                    message.channel.send(
                        'Please search for this anime in a NSFW channel.'
                    );
                }
                else{
                    message.reply({content:'Please search for this anime in a NSFW channel.'});
                }
            }
            else{
                if(myType===0){
                    message.channel.send(
                        'Unable to find what you were looking for on MyAnimeList. Be more specific on the name.'
                    );
                }
                else{
                    message.reply({content:'Unable to find what you were looking for on MyAnimeList. Be more specific on the name.'});
                }
            }
        }
    }
    else{
        if(myType===0){
            message.channel.send(
                'Try again in a minute'
            );
        }
        else{
            message.reply({content:'Try again in a minute'});
        }
    }
}


