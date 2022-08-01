const fetch = require('node-fetch');
const urlAnimeChan = "https://animechan.vercel.app/api/random";

module.exports.fetchRandomQuote = async(message, myType) => {
    if(animeChanCounter>0){
        animeChanCounter-=1;
        try {
            await fetch(urlAnimeChan)
            .then(res => res.json())
            .then(data => {
                if(myType===0){
                    message.channel.send(
                        "\"" + data.quote + "\"" + '\n' + '\n' + '-' + data.character + '\n' + data.anime 
                    );
                }
                else{
                    message.reply({content:"\"" + data.quote + "\"" + '\n' + '\n' + '-' + data.character + '\n' + data.anime });
                }
                animeChanQuotes.push(
                    "\"" + data.quote + "\"" + '\n' + '\n' + '-' + data.character + '\n' + data.anime 
                );
                console.log(animeChanQuotes);
            });   
        } catch (error) {
            console.log('Anime Chan API is down');
        }
    }
    else{
        if(animeChanQuotes.length>0){
            if(myType===0){
                message.channel.send(
                    animeChanQuotes[Math.floor(Math.random()*animeChanQuotes.length)]
                );
            }
            else{
                message.reply(
                    {content: animeChanQuotes[Math.floor(Math.random()*animeChanQuotes.length)]}
                );
            }
        }
    }
}

/* const urlAnimeChan = "https://animechan.vercel.app/api/random";
let fetchRandomQuote = async (message) => {
    if(animeChanCounter>0){
        animeChanCounter-=1;
        try {
            await fetch(urlAnimeChan)
            .then(res => res.json())
            .then(data => {
                message.channel.send(
                    "\"" + data.quote + "\"" + '\n' + '\n' + '-' + data.character + '\n' + data.anime 
                );
                animeChanQuotes.push(
                    "\"" + data.quote + "\"" + '\n' + '\n' + '-' + data.character + '\n' + data.anime 
                );
                console.log(animeChanQuotes);
            });   
        } catch (error) {
            console.log('Anime Chan API is down');
        }
    }
    else{
        if(animeChanQuotes.length>0){
            message.channel.send(
                animeChanQuotes[Math.floor(Math.random()*animeChanQuotes.length)]
            );
        }
    }
}; */