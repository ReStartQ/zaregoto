const fetch = require('node-fetch');
const {waifuPicOptions, waifuPicOptionsGifs}  = require('../config.json');
const urlWaifuPics = "https://api.waifu.pics/sfw/";
//no longer used
module.exports.fetchWaifuPicGifOption = async(message, option, myType) => {
    try {
        if(myType===0){
            await fetch(urlWaifuPics+option)
            .then(res => res.json())
            .then(data => 
                message.channel.send(
                    data.url
                ));
            console.log(urlWaifuPics+option);  
        } 
        else{
            await fetch(urlWaifuPics+option)
            .then(res => res.json())
            .then(data => 
                message.reply(
                    {content:data.url}
                ));
            console.log(urlWaifuPics+option);  
        }
    } catch (error) {
        console.log('Waifu.pics API is currently down');
    }
}
