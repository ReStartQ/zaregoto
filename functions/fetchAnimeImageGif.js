const Anime_Images = require('anime-images-api');
const {waifuPicOptions, waifuPicOptionsGifs}  = require('../config.json');
const AnimeImagesAPI = new Anime_Images();

module.exports.fetchAnimeImageGif = async(message, myType) => {
    let number = Math.floor(Math.random()*8)+1;
    switch(number){
        case 1: 
            try {
                AnimeImagesAPI.sfw.hug().then(response => {
                    if(myType===0){
                        message.channel.send(
                            response.image
                        );
                    }
                    else{
                        message.reply(
                            {content:response.image}
                        );
                    }
                }); 
                console.log('hug');   
            } catch (error) {
                console.log('Anime Images API is down');
            }
            break;
        case 2:
            try {
                AnimeImagesAPI.sfw.kiss().then(response => {
                    if(myType===0){
                        message.channel.send(
                            response.image
                        );
                    }
                    else{
                        message.reply(
                            {content:response.image}
                        );
                    }
                }); 
                console.log('kiss'); 
            } catch (error) {
                console.log('Anime Images API is down');
            }
            break;
        case 3: //unique to AnimeImages
            try {
                AnimeImagesAPI.sfw.punch().then(response => {
                    if(myType===0){
                        message.channel.send(
                            response.image
                        );
                    }
                    else{
                        message.reply(
                            {content:response.image}
                        );
                    }
                }); 
                console.log('punch');
            } catch (error) {
                console.log('Anime Images API is down');
            }
            break;
        case 4:
            try {
                AnimeImagesAPI.sfw.slap().then(response => {
                    if(myType===0){
                        message.channel.send(
                            response.image
                        );
                    }
                    else{
                        message.reply(
                            {content:response.image}
                        );
                    }
                }); 
                console.log('slap');
            } catch (error) {
                console.log('Anime Images API is down');
            }
            break;
        case 5:
            try {
                AnimeImagesAPI.sfw.wink().then(response => {
                    if(myType===0){
                        message.channel.send(
                            response.image
                        );
                    }
                    else{
                        message.reply(
                            {content:response.image}
                        );
                    }
                }); 
                console.log('wink');
            } catch (error) {
                console.log('Anime Images API is down');
            }
            break;
        case 6:
            try {
                AnimeImagesAPI.sfw.pat().then(response => {
                    if(myType===0){
                        message.channel.send(
                            response.image
                        );
                    }
                    else{
                        message.reply(
                            {content:response.image}
                        );
                    }
                });             
                console.log('pat');
            } catch (error) {
                console.log('Anime Images API is down');
            }
            break;
        case 7:
            try {
                AnimeImagesAPI.sfw.kill().then(response => {
                    if(myType===0){
                        message.channel.send(
                            response.image
                        );
                    }
                    else{
                        message.reply(
                            {content:response.image}
                        );
                    }
                }); 
                console.log('kill');
            } catch (error) {
                console.log('Anime Images API is down');
            }
            break;
        case 8:
            try {
                AnimeImagesAPI.sfw.cuddle().then(response => {
                    if(myType===0){
                        message.channel.send(
                            response.image
                        );
                    }
                    else{
                        message.reply(
                            {content:response.image}
                        );
                    }
                }); 
                console.log('cuddle');
            } catch (error) {
                console.log('Anime Images API is down');
            }
            break;
        default:
    }
}

/* const AnimeImagesAPI = new Anime_Images();

let fetchAnimeImageGif = async (message) =>{
    let number = Math.floor(Math.random()*8)+1;
    switch(number){
        case 1: 
            try {
                AnimeImagesAPI.sfw.hug().then(response => {
                    message.channel.send(
                        response.image
                    );
                }); 
                console.log('hug');   
            } catch (error) {
                console.log('Anime Images API is down');
            }
            break;
        case 2:
            try {
                AnimeImagesAPI.sfw.kiss().then(response => {
                    message.channel.send(
                        response.image
                    );
                }); 
                console.log('kiss'); 
            } catch (error) {
                console.log('Anime Images API is down');
            }
            break;
        case 3: //unique to AnimeImages
            try {
                AnimeImagesAPI.sfw.punch().then(response => {
                    message.channel.send(
                        response.image
                    );
                }); 
                console.log('punch');
            } catch (error) {
                console.log('Anime Images API is down');
            }
            break;
        case 4:
            try {
                AnimeImagesAPI.sfw.slap().then(response => {
                    message.channel.send(
                        response.image
                    );
                }); 
                console.log('slap');
            } catch (error) {
                console.log('Anime Images API is down');
            }
            break;
        case 5:
            try {
                AnimeImagesAPI.sfw.wink().then(response => {
                    message.channel.send(
                        response.image
                    );
                }); 
                console.log('wink');
            } catch (error) {
                console.log('Anime Images API is down');
            }
            break;
        case 6:
            try {
                AnimeImagesAPI.sfw.pat().then(response => {
                    message.channel.send(
                        response.image
                    );
                });             
                console.log('pat');
            } catch (error) {
                console.log('Anime Images API is down');
            }
            break;
        case 7:
            try {
                AnimeImagesAPI.sfw.kill().then(response => {
                    message.channel.send(
                        response.image
                    );
                }); 
                console.log('kill');
            } catch (error) {
                console.log('Anime Images API is down');
            }
            break;
        case 8:
            try {
                AnimeImagesAPI.sfw.cuddle().then(response => {
                    message.channel.send(
                        response.image
                    );
                }); 
                console.log('cuddle');
            } catch (error) {
                console.log('Anime Images API is down');
            }
            break;
        default:
    }
}; */