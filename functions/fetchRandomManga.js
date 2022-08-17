const { EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');
const jikanjs = require('@mateoaranda/jikanjs');

//use Jikan API to get JSON and then return an embed object if it doesn't return error
module.exports.fetchRandomManga = async(message, myType) => {
    if(jikanSecondCounter>0&&jikanMinuteCounter>0){
        jikanMinuteCounter-=1;
        jikanSecondCounter-=1;
        try {
            let manga = await jikanjs.loadRandom('manga');
            console.log(manga);
            manga.data.genres.map(genre=>{
                console.log(genre.name);
            })
            if(manga.data.genres!=null){
                let myGenreArray=[]
                manga.data.genres.map(genre=>{
                    myGenreArray.push(genre.name);
                })
                console.log(myGenreArray);
                while(myGenreArray.includes('Hentai')){
                    if((jikanSecondCounter>0&&jikanMinuteCounter>0)){
                        jikanMinuteCounter-=1;
                        jikanSecondCounter-=1;
                        manga = await jikanjs.loadRandom('manga');
                        myGenreArray=[];
                        if(manga.data.genres==null){
                            break;
                        }
                        manga.data.genres.map(genre=>{
                            myGenreArray.push(genre.name);
                        })
                    }
                }
            }

            let type = manga.data.type;
            let published = manga.data.published.string;

            if(published==null){
                published="Unknown";
            }

            let synopsis=manga.data.synopsis;
            if(synopsis==null){
                synopsis='No information available';
            }
            let status=manga.data.status;
            if(status==null){
                status='N/A';
            }
            let url = manga.data.url;
            let title = manga.data.title;
            let image = manga.data.images.jpg.image_url;
            let genres = '';
            manga.data.genres.map(data=>{
                if(genres==''){
                    genres+=data.name;
                }
                else{
                    genres+=", " + data.name;
                }
            });
            if(manga.data.genres.length==0){
                genres='Unknown';
            }
            let chapters = "0";
            if(manga.data.chapters==null){
                chapters='?';
            }
            else{
                chapters = manga.data.chapters.toString();
            }

            let volumes = "0";
            if(manga.data.volumes==null){
                volumes='?';
            }
            else{
                volumes = manga.data.volumes.toString();
            }

            let score = '';
            if(manga.data.score==null){
                score='N/A';
            }
            else{
                score = manga.data.score.toString();
            }

            let rank = '';
            if(manga.data.rank==null){
                rank='N/A';
            }
            else{
                rank = manga.data.rank.toString();
            }

            let popularity = '';
            if(manga.data.popularity==null){
                popularity='N/A';
            }
            else{
                popularity = manga.data.popularity.toString();
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

            if(myType===0){
                message.channel.send(
                    {embeds:[exampleEmbed]}
                );
            }
            else{
                message.reply({embeds:[exampleEmbed]});
            };
            
        } catch (error) {
            //console.log('Media lookup not found');
            console.log(error);
            if(myType===0){
                message.channel.send(
                    'Try again later'
                );
            }
            else{
                message.reply({content:'Try again later'});
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
