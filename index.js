const DiscordJS = require('discord.js');
const { Intents } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const Anime_Images = require('anime-images-api');
const AnimeFact = require("anime-facts");


//setting up dotenv token
dotenv.config();

//intents from discord api
const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});


/* 
    Listening for when bot is ready 
*/

client.once('ready', () =>{
    console.log('bot ready');
});


/* 
    animethemes api
    curl https://api.animethemes.moe/video/?sort=random
 */
const urlAnimeThemes = "https://api.animethemes.moe/video/?sort=random";

//animethemes rate limit is 90 per minute.
let animeThemesCounter = 80;
let animeThemes = [];
setInterval(() => {
    animeThemesCounter = 80;
    animeThemes = [];
}, 60*1000);


//random op/ed theme vid function
let fetchRandomTheme = async (message) => {
    if(animeThemesCounter>0){
        animeThemesCounter-=1;
        try {
            await fetch(urlAnimeThemes)
            .then( res => res.json() )
            .then( data => {
                message.channel.send(
                    data.videos[0].filename + '\n' + data.videos[0].link
                );
                animeThemes.push(
                    data.videos[0].filename + '\n' + data.videos[0].link
                );
            });   
        } catch (error) {
            console.log('AnimeThemes API is down');
        }
    }
    else{
        if(animeThemes.length>0){
            message.channel.send(
                animeThemes[Math.floor(Math.random()*animeThemes.length)]
            );
        }
    }
};


/* 
    animechan api
    curl https://animechan.vercel.app/api/random
*/
const urlAnimeChan = "https://animechan.vercel.app/api/random"

// animechan api rate limit is 100 per hour. 
let animeChanCounter = 97;
let animeChanQuotes = [];
setInterval(() => {
    animeChanCounter = 97;
    animeChanQuotes = [];
}, 60*1000*60);


//random quote function
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
};


/* 
    waifu.pics api has no limit for API
*/

//these are the categories available for waifuPics
let waifuPicOptions = [
    //images 0-4
    "waifu", 
    "neko", 
    "shinobu",
    "megumin",
    "awoo"
];

let waifuPicOptionsGifs = [
    //gifs 5-30
    "bully", 
    "cuddle",
    "cry",
    "hug",
    "kiss",
    "lick",
    "pat",
    "smug",
    "bonk",
    "yeet",
    "blush",
    "smile",
    "wave",
    "highfive",
    "handhold",
    "nom",
    "bite",
    "glomp",
    "slap",
    "kill",
    "kick",
    "happy",
    "wink",
    "poke",
    "dance",
    "cringe"
]

const urlWaifuPics = "https://api.waifu.pics/sfw/";

//random waifu pic function
let fetchWaifuPic = async (message) => {
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
        await fetch(urlWaifuPics+myOption)
        .then(res => res.json())
        .then(data => 
            message.channel.send(
                data.url
            ));
        console.log(urlWaifuPics+myOption);   
    } catch (error) {
        console.log('Waifu.pics API is currently down')
    }
};

let fetchWaifuPicGif = async (message) => {
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
};

//gif with option
let fetchWaifuPicGifOption = async (message, option) => {
    try {
        await fetch(urlWaifuPics+option)
        .then(res => res.json())
        .then(data => 
            message.channel.send(
                data.url
            ));
        console.log(urlWaifuPics+option);   
    } catch (error) {
        console.log('Waifu.pics API is currently down');
    }
};

//embeded gif options menu

//gif option menu
let fetchWaifuPicGifOptionMenu = async (message) => {
    message.channel.send(
        '?gif-option: Random anime gif based off of option specified.\n \n' +
        'Replace option with one of the following below: \n' +
        'hug, cuddle, dance, poke, happy, wink, smile, wave, cry, kiss, lick, pat, smug, bully, bonk, yeet, blush, highfive, handhold, nom, bite, glomp, slap, kill, kick, cringe \n \n'+
        'Example: ?gif-hug'
    );
}


/* 
    AnimeImagesAPI 
*/

//Gives gifs, since the waifu endpoint doesn't work properly
const AnimeImagesAPI = new Anime_Images();

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
};


/* 
    AnimuAPI
*/

// AnimuAPI has a rate limit of 5 requests per second 
let animuCounter = 4;
let animuFacts = [];
setInterval(() => {
    animuCounter = 4;
    animuFacts = [];
}, 1000);


const AnimeFactAPI = new AnimeFact(process.env.ANIME_FACT_TOKEN);

//Anime Facts from AnimuAPI
let fetchAnimeFact = async (message) =>{
    if(animuCounter>0){
        animuCounter -= 1;
        try {
            await AnimeFactAPI.getFact().then((res) => {
                message.channel.send(
                    res.fact
                );
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
            message.channel.send(
                animuFacts[Math.floor(Math.random()*animuFacts.length)]
            );
        }
    }
};


/* 
    Help Menu 
*/

//embeded help menu

//help menu to show list of commands. Notification in channel and DM message for menu
let help = (message) => {
    message.channel.send(
        'Check your **DM** for the help menu.'
    );
    message.author.send(
        '**Help Menu** \n' +
        '__**Commands:**__ \n' +
        '**?theme**: Random anime op/ed theme song video. \n \n' +
        '**?quote**: Random anime quote. \n \n' +
        '**?pic**: Random anime picture. \n \n' +
        '**?fact**: Random anime fact. \n \n' +
        '**?gif**: Random anime gif. \n \n' +
        '**?gif-option**: Random anime gif based off of option specified.\n' +
        '__Replace **option** with one of the following below__: \n' +
        'hug, cuddle, dance, poke, happy, wink, smile, wave, cry, kiss, lick, pat, smug, bully, bonk, yeet, blush, highfive, handhold, nom, bite, glomp, slap, kill, kick, cringe \n \n' +
        '**?zaregoto**: Random command. \n \n'+
        '**?help**: The help menu.'
    );
};

let helpChannel = (message) => {
    message.channel.send(
       
    );
}

/* 
    Zaregoto
*/

let zaregoto = async (message) =>{
    let zaregotoNumber = Math.floor(Math.random()*7); //7 total commands
    switch(zaregotoNumber){
        case 0:
            await fetchRandomTheme(message);
            break;
        case 1:
            await fetchRandomQuote(message);
            break;
        case 2:
            await fetchWaifuPic(message);
            break;
        case 3:
            await fetchAnimeFact(message);
            break;
        case 4:
            await fetchWaifuPicGif(message);
            break;
        case 5:
            help(message);
            break;
        case 6:
            help-channel(message);
            break;
        default:
    }
};


/* 
    Whenever user creates a message in discord channel, listen for specific messages
*/

client.on('messageCreate', async (message) =>{
    switch(message.content.toLocaleLowerCase()){
        case '?theme':
            await fetchRandomTheme(message);
            break;
        case '?quote':
            await fetchRandomQuote(message);
            break;
        case '?pic':
            await fetchWaifuPic(message);
            break;
        case '?fact':
            await fetchAnimeFact(message);
            break;
        case '?gif':
            await fetchWaifuPicGif(message);
            break;
        case '?gif-option':
            await fetchWaifuPicGifOptionMenu(message);
            break;
        case '?zaregoto':
            await zaregoto(message);
            break;
        case '?help':
            help(message);
            break;
        case '?help-channel':
            helpChannel(message);
            break;
        default:
    }

    //gif-options
    if(message.content.toLocaleLowerCase().startsWith('?gif-')){ //5 characters
        let myStartsWithIndex = 5; //this number will change depending on the command
        let myOption = message.content.toLocaleLowerCase().substring(myStartsWithIndex, message.content.toLocaleLowerCase().length);
        console.log(myOption);
        if(waifuPicOptionsGifs.includes(myOption)){ //check to see if its one of the options
            await fetchWaifuPicGifOption(message, myOption);
        }
    }
});


//logging in
client.login(process.env.TOKEN);