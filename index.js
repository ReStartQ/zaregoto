const DiscordJS = require('discord.js');
const {Intents} = require('discord.js');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

//setting up dotenv token
dotenv.config();

//intents from discord api
const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

//when bot ready
client.on('ready', () =>{
    console.log('bot ready');
});

//curl https://api.animethemes.moe/video/?sort=random
//animethemes api
const urlAnimeThemes = "https://api.animethemes.moe/video/?sort=random";

//random op/ed vid function
let fetchRandomVid = async (message) => {
    fetch(urlAnimeThemes)
        .then( res => res.json() )
        .then( data => 
            message.reply({
                content: data.videos[0].filename + '\n' + data.videos[0].link
            }));
}

//animechan api
const urlAnimeChan = "https://animechan.vercel.app/api/random"

//random quote function
let fetchRandomQuote = async (message) => {
    fetch(urlAnimeChan)
        .then(res => res.json())
        .then(data => 
            message.reply({
                content: 'Anime: ' + data.anime + '\n' + data.quote + '\n' + '-' + data.character
            }));
}

//waifu pics api
const urlWaifuPics = "https://api.waifu.pics/sfw/waifu"

//random waifu pic function
let fetchWaifuPic = async (message) => {
    fetch(urlWaifuPics)
        .then(res => res.json())
        .then(data => 
            message.reply({
                content: data.url
            }));
}

//Put other apis here and comment like above. If using same api, put it in the same section



//Whenever user creates a message in discord channel
client.on('messageCreate', async (message) =>{
    switch(message.content){
        case 'randomvid':
            await fetchRandomVid(message);
            break;
        case 'randomquote':
            await fetchRandomQuote(message);
            break;
        case 'randomwaifupic':
            await fetchWaifuPic(message);
            break;
        default:
    }
});


//logging in
client.login(process.env.TOKEN);