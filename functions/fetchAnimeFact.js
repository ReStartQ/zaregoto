const { config } = require('dotenv');
const fetch = require('node-fetch');
const AnimeFact = require("anime-facts");
//dotenv
config();
const AnimeFactAPI = new AnimeFact(process.env.ANIME_FACT_TOKEN);

module.exports.fetchAnimeFact = async(message, myType) => {
    if(animuCounter>0){
        animuCounter -= 1;
        try {
            await AnimeFactAPI.getFact().then((res) => {
                if(myType==0){
                    message.channel.send(
                        res.fact
                    );
                }
                else{
                    message.reply({content: res.fact})
                }
                animuFacts.push(
                    res.fact
                );
                console.log(res.fact);
            });   
        } catch (error) {
            console.log('Animu API down');
        }
    }
    else{
        if(animuFacts>0){
            if(myType==0){
                message.channel.send(
                    animuFacts[Math.floor(Math.random()*animuFacts.length)]
                );
            }
            else{
                message.reply(
                    { content: animuFacts[Math.floor(Math.random()*animuFacts.length)] }
                )
            }
        }
    }
}

