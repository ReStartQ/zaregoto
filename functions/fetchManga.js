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

            if(manga.data[0]===undefined){
                console.log('not found');
                throw 'MANGA NOT FOUND'
            }

            let myIndex = 0;
            let myMapFlag = false;

            manga.data.map((data, index)=>{
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

            

            let type = manga.data[myIndex].type;
            let published = manga.data[myIndex].published.from;

            if(published==null){
                published="Unknown";
            }
            else{
                published=published.slice(0, published.indexOf('T'));
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
                    name: 'Status', 
                    value: status, 
                    inline: true 
                },
                {   
                    name: 'Start Date', 
                    value: published, 
                    inline: true 
                },
                {   
                    name: 'Genres', 
                    value: genres, 
                    inline: true 
                },
                {   
                    name: 'Score', 
                    value: score, 
                    inline: true 
                },
                {   
                    name: 'Ranked', 
                    value: rank, 
                    inline: true 
                },
                {   
                    name: 'Popularity', 
                    value: popularity, 
                    inline: true 
                },
            )
            .setFooter({ text: 'Queried with Jikan v4 MAL API'});


            if(myType===0){
                message.channel.send(
                    {embeds:[exampleEmbed]}
                );
            }
            else{
                message.reply({embeds:[exampleEmbed]});
            }

        } catch (error) {
            //console.log('Media lookup not found');
            console.log(error);
            if(myType===0){
                message.channel.send(
                    'Unable to find what you were looking for on MAL. Be more specific on the name.'
                );
            }
            else{
                message.reply({content:'Unable to find what you were looking for on MAL. Be more specific on the name.'});
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


