const fetch = require('node-fetch');
const {waifuPicOptions, waifuPicOptionsGifs}  = require('../config.json');
const urlWaifuPics = "https://api.waifu.pics/sfw/";
const { fetchAnimeImageGif } = require('./fetchAnimeImageGif');

module.exports.fetchWaifuPicGif = async(message, myType) => {
    let myOption = waifuPicOptionsGifs[Math.floor(Math.random()*waifuPicOptionsGifs.length)];
    if((Math.floor(Math.random()*20))>16){
        await fetchAnimeImageGif(message, myType);
    }
    else{
        try {
            if(myType===0){
                await fetch(urlWaifuPics+myOption)
                .then(res => res.json())
                .then(data => 
                    message.channel.send(
                        data.url
                    ));
                console.log(urlWaifuPics+myOption);      
            }
            else{
                await fetch(urlWaifuPics+myOption)
                .then(res => res.json())
                .then(data => 
                    message.reply(
                        {content:data.url}
                    ));
                console.log(urlWaifuPics+myOption);   
            }
        } catch (error) {
            console.log('Waifu.pics API is currently down');
        }
    }
}

/* let fetchWaifuPicGif = async (message) => {
    let myOption = waifuPicOptionsGifs[Math.floor(Math.random()*waifuPicOptionsGifs.length)];
    
    if((Math.floor(Math.random()*20))>16){
        await fetchAnimeImageGif(message);
    }
    else{
        try {
            await fetch(urlWaifuPics+myOption)
            .then(res => res.json())
            .then(data => 
                message.channel.send(
                    data.url
                ));
            console.log(urlWaifuPics+myOption);   
        } catch (error) {
            console.log('Waifu.pics API is currently down');
        }
    }
}; */