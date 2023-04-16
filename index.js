const { Client, Collection, GatewayIntentBits, ActivityType } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require( 'discord-api-types/v10');
const fs = require( 'fs');
const { config } = require('dotenv');

//dotenv
config();

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID =process.env.GUILD_ID;

//intents from discord js api
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const commands = [];
client.commands = new Collection();

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}

//these are the categories available for waifuPics
const {waifuPicOptions, waifuPicOptionsGifs}  = require('./config.json');
/* 
    function declarations
*/
const { waifuPicGifOptionMenu } = require('./functions/waifuPicGifOptionMenu');
const { help } = require('./functions/help');
const { helpDM } = require('./functions/helpDM');
const { fetchWaifuPic } = require('./functions/fetchWaifuPic');
const { fetchAnimeImageGif } = require('./functions/fetchAnimeImageGif');
const { fetchWaifuPicGif } = require('./functions/fetchWaifuPicGif');
const { fetchAnimeFact } = require('./functions/fetchAnimeFact');
const { fetchWaifuPicGifOption } = require('./functions/fetchWaifuPicGifOption');
const { fetchRandomTheme } = require('./functions/fetchRandomTheme');
const { fetchRandomQuote } = require('./functions/fetchRandomQuote');
const { fetchRandomAnime } = require('./functions/fetchRandomAnime');
const { fetchRandomManga } = require('./functions/fetchRandomManga');
const { fetchAnime } = require('./functions/fetchAnime');
const { fetchManga } = require("./functions/fetchManga");
const { fetchTheme } = require('./functions/fetchTheme');

const helpersFiles = fs.readdirSync("./helpers").filter(file => file.endsWith('.js'));

const rest = new REST({ version: '10' }).setToken(TOKEN);

for(const file of helpersFiles){
    require(`./helpers/${file}`)(client, Routes, TOKEN, CLIENT_ID, GUILD_ID, rest, commands);
}
const setupFile = require('./helpers/setup');
setupFile.setup;

const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith('.js'));

/* 
    Whenever user creates a message in discord channel, listen for specific messages
*/
for(const file of eventFiles){
    const event = require(`./events/${file}`);
    if(event.once){
        client.once(event.name, async (...args) => event.execute(...args, commands, ActivityType));
    } else {
        client.on(event.name, async (...args) => event.execute(...args, commands, fetchWaifuPic, fetchWaifuPicGif, fetchWaifuPicGifOption, waifuPicGifOptionMenu, help, helpDM, waifuPicOptionsGifs, waifuPicOptions, fetchAnimeImageGif, fetchAnimeFact, fetchRandomTheme, fetchRandomQuote, fetchRandomAnime, fetchRandomManga, fetchAnime, fetchManga, fetchTheme));
    }
}

/* // added to reconnect
client.on('disconnect', function(erMsg, code) {
    console.log('----- Bot disconnected from Discord with code', code, 'for reason:', erMsg, '-----');
    let date_ob = new Date();
    const content = date_ob.toString();
    fs.writeFile('/discordboterrors.txt', content, err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
        });
    client.connect();
  }); */


//Jikan API for MAL
//Per Minute 60 requests
//Per Second 3 requests
global.jikanMinuteCounter=55;
global.jikanSecondCounter=2;
global.jikanRandomAnime=[];
global.jikanRandomManga=[];

setInterval(() => {
    jikanMinuteCounter=55;
    jikanRandomAnime=[];
    jikanRandomManga=[];
}, 60*1000);

setInterval(() => {
    jikanSecondCounter=2;
}, 1000);


//animethemes rate limit is 90 per minute.
global.animeThemesCounter = 85;
global.animeThemes = [];
setInterval(() => {
    animeThemesCounter = 85;
    animeThemes = [];
}, 60*1000);

// animechan api rate limit is 100 per hour. 
global.animeChanCounter = 97;
global.animeChanQuotes = [];
setInterval(() => {
    animeChanCounter = 97;
    animeChanQuotes = [];
}, 60*1000*60);

// AnimuAPI has a rate limit of 5 requests per second 
global.animuCounter = 4;
global.animuFacts = [];
setInterval(() => {
    animuCounter = 4;
    animuFacts = [];
}, 1000);