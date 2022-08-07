const { EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');
const urlAnimeThemes = "https://api.animethemes.moe/video/?q=";
//make embed menu for search results
module.exports.fetchTheme = async(message, myType, myOption) => {
    if(animeThemesCounter>0){
        animeThemesCounter-=1;
        try {
            await fetch(urlAnimeThemes+myOption)
            .then( res => res.json() )
            .then( data => {
                //iterate through and if there is a match return the result. Else return an embed object menu.
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
        if(myType==0){
            message.channel.send(
                'Try again in a minute.'
            );
        }
        else{
            message.reply(
                'Try again in a minute.'
            )
        }
    }
}

