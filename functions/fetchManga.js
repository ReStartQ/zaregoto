const { EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');
const jikanjs = require('@mateoaranda/jikanjs');

module.exports.fetchManga = async(message, myOption, myType) => {
    if(jikanSecondCounter>0&&jikanMinuteCounter>0){
        jikanMinuteCounter-=1;
        jikanSecondCounter-=1;
        try {
            let manga = await jikanjs.search('manga', myOption, 25); 
            console.log(manga);

            const exampleEmbed2 = new EmbedBuilder()
            .setColor(0x2C3E50)
            .setTitle('Manga \n')
            .setDescription('*Set the option for* **/manga [name]**.\n'+
                            '__**Example:**__ \n'+
                            '*The usage of* `name:` *indicates that the option has been selected or autocompleted.* \n' +
                            '**/manga** `name: Bakemonogatari`\n\n'+
                            '*The following results are based off the name that you provided:* ' + '**'+ myOption +'**'+ '\n')
            .setFooter({ text: 'Only shows up to the first 25 manga results. \n' + 'For more accurate search results, be more specific with the manga name.'});

            if(manga.data[0]===undefined){
                console.log('not found');
                throw 'MANGA NOT FOUND'
            }

            let myIndex = 0;
            let myMapFlag = false;


            manga.data.map((data, index)=>{
                let tempGenreArray=[];
                let tempNSFWflag=false;

                data.genres.map(genre=>{
                    tempGenreArray.push(genre.name);
                });
    
                //check for hentai or erotica
                if(tempGenreArray.includes('Hentai')||tempGenreArray.includes('Erotica')){
                    tempNSFWflag=true;
                }

                if(tempNSFWflag===false && message.channel.nsfw===false){ //if not NSFW and channel is nsfw then
                    exampleEmbed2.addFields(	
                        {   
                            name: 'Name:', 
                            value: '`' + data.title + '`' 
                        },
                    )
                }
                else if(tempNSFWflag===true && message.channel.nsfw===true){ //if NSFW and channel is nsfw then
                    exampleEmbed2.addFields(	
                        {   
                            name: 'Name:', 
                            value: '`' + data.title + '`' 
                        },
                    )
                }
                else if(tempNSFWflag===false && message.channel.nsfw===true){ //if not NSFW and channel is nsfw then
                    exampleEmbed2.addFields(	
                        {   
                            name: 'Name:', 
                            value: '`' + data.title + '`' 
                        },
                    )
                }


                if(data.title.toLocaleLowerCase()==myOption.toLocaleLowerCase()&&myMapFlag==false){
                    myIndex=index;
                    myMapFlag=true;
                }
                else if(data.title.toLocaleLowerCase().includes(myOption)&&myMapFlag==false){
                    myIndex=index;
                }
                else if(data.title.toLocaleLowerCase()==myOption.toLocaleLowerCase()&&myMapFlag==true){ //check for duplicates and if so, go with more popular one (lower number)

                    let tempPopularity = data.popularity;
                    let currentPopularity = manga.data[myIndex].popularity;
                    
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
            if(myMapFlag){
                manga.data[myIndex].genres.map(genre=>{
                    myGenreArray.push(genre.name);
                });
    
                //check for hentai or erotica
                if(myGenreArray.includes('Hentai')||myGenreArray.includes('Erotica')){
                    NSFWflag=true;
                }
            }

            let type = manga.data[myIndex].type;
            let published = manga.data[myIndex].published.string;

            if(published==null){
                published="Unknown";
            }

            let synopsis=manga.data[myIndex].synopsis;
            if(synopsis==null){
                synopsis='No information available';
            }
            let status=manga.data[myIndex].status;
            if(status==null){
                status='N/A';
            }
            let url = manga.data[myIndex].url;
            let title = manga.data[myIndex].title;
            let image = manga.data[myIndex].images.jpg.image_url;
            let genres = '';
            manga.data[myIndex].genres.map(data=>{
                if(genres==''){
                    genres+=data.name;
                }
                else{
                    genres+=", " + data.name;
                }
            });
            if(manga.data[myIndex].genres.length==0){
                genres='Unknown';
            }
            let chapters = "0";
            if(manga.data[myIndex].chapters==null){
                chapters='?';
            }
            else{
                chapters = manga.data[myIndex].chapters.toString();
            }

            let volumes = "0";
            if(manga.data[myIndex].volumes==null){
                volumes='?';
            }
            else{
                volumes = manga.data[myIndex].volumes.toString();
            }

            let score = '';
            if(manga.data[myIndex].score==null){
                score='N/A';
            }
            else{
                score = manga.data[myIndex].score.toString();
            }

            let rank = '';
            if(manga.data[myIndex].rank==null){
                rank='N/A';
            }
            else{
                rank = manga.data[myIndex].rank.toString();
            }

            let popularity = '';
            if(manga.data[myIndex].popularity==null){
                popularity='N/A';
            }
            else{
                popularity = manga.data[myIndex].popularity.toString();
            }

            const exampleEmbed = new EmbedBuilder()
            .setColor(0x206694)
            .setThumbnail(image)
            .setTitle(title)
            .setURL(url)
            .setDescription(synopsis)
            .addFields(
                {
                    name: 'Chapters',
                    value: chapters,
                    inline: true
                },
                {   
                    name: 'Status', 
                    value: status, 
                    inline: true 
                },
                {   
                    name: 'Published', 
                    value: published, 
                    inline: true 
                },
                {   
                    name: 'Score', 
                    value: score, 
                    inline: true 
                },
                {
                    name: 'Volumes',
                    value: volumes,
                    inline: true
                },
                {   
                    name: 'Type', 
                    value: type, 
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
                        'Please lookup this manga in a NSFW channel.'
                    );
                }
                else{
                    message.reply({content:'Please lookup this manga in a NSFW channel.'});
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


