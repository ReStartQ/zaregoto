const fetch = require('node-fetch');
const {waifuPicOptions, waifuPicOptionsGifs}  = require('../config.json');
const urlWaifuPics = "https://api.waifu.pics/sfw/";

module.exports.fetchWaifuPic = async(message, myType) => {
    //waifuPicOptions[Math.floor(Math.random()*waifuPicOptions.length)];
    let myOption = waifuPicOptions[Math.floor(Math.random()*waifuPicOptions.length)];
    switch(Math.floor(Math.random()*20)){
        case 1: 
            myOption = waifuPicOptions[1];
            break;
        case 2: 
            myOption = waifuPicOptions[2];
            break;
        case 3:
            myOption = waifuPicOptions[3];
            break;
        case 4:
            myOption = waifuPicOptions[4];
            break;
        default:
            myOption = waifuPicOptions[0];
    }
    try {
        if(myType===0){
            await fetch(urlWaifuPics+myOption)
            .then(res => res.json())
            .then(data => 
                message.channel.send(
                    data.url
                ));
        }
        else{
            await fetch(urlWaifuPics+myOption)
            .then(res => res.json())
            .then(data => 
                message.reply(
                    {content: data.url}
                ));
        }
        console.log(urlWaifuPics+myOption);   
    } catch (error) {
        console.log('Waifu.pics API is currently down')
    }
}
