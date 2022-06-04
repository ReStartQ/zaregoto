const DiscordJS = require('discord.js');
const {Intents} = require('discord.js');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () =>{
    console.log('bot ready');
});

//curl https://api.animethemes.moe/video/?sort=random

//animethemes api
const urlVidRandom = "https://api.animethemes.moe/video/?sort=random";

let fetchVidRandom = async (message) => {
    fetch(urlVidRandom)
        .then( res => res.json() )
        .then( data => 
            message.reply({
                content: data.videos[0].filename+'\n'+data.videos[0].link
            }));
}

client.on('messageCreate', async (message) =>{
    if(message.content === 'ping'){
        await fetchVidRandom(message);
    }
});


//logging in
client.login(process.env.TOKEN);