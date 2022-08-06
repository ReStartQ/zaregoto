const { EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');
const jikanjs = require('@mateoaranda/jikanjs');

//use Jikan API to get JSON and then return an embed object if it doesn't return error
module.exports.fetchRandomAnime = async(message, myType) => {
    if(jikanSecondCounter>0&&jikanMinuteCounter>0){
        jikanMinuteCounter-=1;
        jikanSecondCounter-=1;
        try {
            let anime = await jikanjs.loadRandom('anime');
            console.log(anime);
            if(anime.data.rating!=null){
                while(anime.data.rating.startsWith('Rx')){
                    if((jikanSecondCounter>0&&jikanMinuteCounter>0)){
                        jikanMinuteCounter-=1;
                        jikanSecondCounter-=1;
                        anime = await jikanjs.loadRandom('anime');
                    }
                    if(anime.data.rating==null){
                        break; //breaks when it is null
                    }
                }
            }

            let synopsis=anime.data.synopsis;
            if(synopsis==null){
                synopsis='No information available';
            }
            let status=anime.data.status;
            if(status==null){
                status='N/A';
            }
            let url = anime.data.url;
            let title = anime.data.title;
            let image = anime.data.images.jpg.image_url;
            let genres = '';
            anime.data.genres.map(data=>{
                if(genres==''){
                    genres+=data.name;
                }
                else{
                    genres+=", " + data.name;
                }
            });
            if(anime.data.genres.length==0){
                genres='Unknown';
            }
            let episodes = "0";
            if(anime.data.episodes==null){
                episodes='?';
            }
            else{
                episodes = anime.data.episodes.toString();
            }

            let season = '';
            if(anime.data.season==null&&anime.data.year==null){
                season = 'Unknown'
            }
            else if(anime.data.season==null){
                season = anime.data.year;
            }
            else if(anime.data.year==null){
                season = anime.data.season.charAt(0).toUpperCase() + anime.data.season.slice(1);
            }
            else{
                season = anime.data.season.charAt(0).toUpperCase() + anime.data.season.slice(1) + " " + anime.data.year.toString();
            }

            let studios = '';

            anime.data.studios.map(data=>{
                if(studios==''){
                    studios+=data.name;
                }
                else{
                    studios+=", " + data.name;
                }
            });
            if(anime.data.studios.length==0){
                studios='Unknown';
            }

            let source = '';
            if(anime.data.source==null){
                source = 'Unknown';
            }
            else{
                source = anime.data.source;
            }

            let score = '';
            if(anime.data.score==null){
                score='N/A';
            }
            else{
                score = anime.data.score.toString();
            }

            let rank = '';
            if(anime.data.rank==null){
                rank='N/A';
            }
            else{
                rank = anime.data.rank.toString();
            }

            let popularity = '';
            if(anime.data.popularity==null){
                popularity='N/A';
            }
            else{
                popularity = anime.data.popularity.toString();
            }

            const exampleEmbed = new EmbedBuilder()
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
