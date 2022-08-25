const fetch = require('node-fetch');
const urlAnimeChan = "https://animechan.vercel.app/api/random";

module.exports.fetchRandomQuote = async(message, myType) => {
    if(animeChanCounter>0){
        animeChanCounter-=1;
        try {
            await fetch(urlAnimeChan)
            .then(res => res.json())
            .then(async (data) => {
                if(myType===0){
                    await message.channel.send(
                        ">>> " + '__**' + data.anime + '**__\n' + "\"" + data.quote.replaceAll("\"","\'") + "\"" + '\n' + '\n' + '- ' + data.character  
                    );
                }
                else{
                    await message.reply({
                        content:">>> " + '__**' + data.anime + '**__\n' + "\"" + data.quote.replaceAll("\"","\'") + "\"" + '\n' + '\n' + '- ' + data.character  
                    });
                }
                animeChanQuotes.push(
                    ">>> " + '__**' + data.anime + '**__\n' + "\"" + data.quote.replaceAll("\"","\'") + "\"" + '\n' + '\n' + '- ' + data.character 
                );
                console.log(animeChanQuotes);
            });   
        } catch (error) {
            console.log('Anime Chan API is down');
            await message.reply(
                {content:'Try again later', ephemeral: true}
            );
        }
    }
    else{
        if(animeChanQuotes.length>0){
            if(myType===0){
                await message.channel.send(
                    animeChanQuotes[Math.floor(Math.random()*animeChanQuotes.length)]
                );
            }
            else{
                await message.reply(
                    {content: animeChanQuotes[Math.floor(Math.random()*animeChanQuotes.length)]}
                );
            }
        }
    }
}

