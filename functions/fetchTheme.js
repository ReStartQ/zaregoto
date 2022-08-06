const fetch = require('node-fetch');
const urlAnimeThemes = "https://api.animethemes.moe/video/?q=random";

module.exports.fetchRandomTheme = async(message, myType) => {
    if(animeThemesCounter>0){
        animeThemesCounter-=1;
        try {
            await fetch(urlAnimeThemes)
            .then( res => res.json() )
            .then( data => {
                if(myType==0){
                    message.channel.send(
                        data.videos[0].filename + '\n' + data.videos[0].link
                    );
                }
                else{
                    message.reply(
                        { content: data.videos[0].filename + '\n' + data.videos[0].link }
                    )
                }
                animeThemes.push(
                    data.videos[0].filename + '\n' + data.videos[0].link
                );
            });   
        } catch (error) {
            console.log(error);
        }
    }
    else{
        if(animeThemes.length>0){
            if(myType==0){
                message.channel.send(
                    animeThemes[Math.floor(Math.random()*animeThemes.length)]
                );
            }
            else{
                message.reply(
                    { content: animeThemes[Math.floor(Math.random()*animeThemes.length)] }
                )
            }
        }
    }
}

