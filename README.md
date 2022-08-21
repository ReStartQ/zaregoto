
# <img src="https://github.com/ReStartQ/zaregoto/blob/main/extra/Zaregoto.png?raw=true" width="1000">
Zaregoto is a discord bot that brings anime content to your discord server. 
<br />
Lookup an anime or manga. 
<br/>
Get anime op/ed theme song videos, gifs, quotes, and more. 
<br/>


# Getting Started
Invite Zaregoto to your server [here](https://discord.com/api/oauth2/authorize?client_id=1001863523359531200&permissions=431644600384&scope=bot%20applications.commands).

# Preview
<img src="https://i.imgur.com/nNKVcYR.png" width="100%">

# Commands 
**/anime `[name]`** - Lookup an anime. <br />
**/manga `[name]`** - Lookup a manga or light novel. <br />
**/theme `[name]`** - Lookup an anime op/ed theme song. <br />
**/gif `[category]`** - Get an anime gif from a category. <br />
**/anime** - Get a random anime. <br />
**/manga** - Get a random manga. <br />
**/theme** - Get a random anime op/ed theme song. <br />
**/gif** - Get an anime gif from any category. <br />
**/quote** - Get an anime quote. <br />
**/pic** - Get an anime picture. <br />
**/fact** - Get an anime fact. <br />
**/help** - The help menu. <br />

# How to run Zaregoto for development purposes?

## 1. Clone the directory
```
git clone https://github.com/ReStartQ/zaregoto.git
```
## 2. Install node dependencies
```
npm install
```
## 3. Make an env file
*In the .env file provide the following*

TOKEN: This is the discord token from your discord developer portal

ANIME_FACT_TOKEN: Can be generated with Animu discord server [here](https://animu.ml/). If you dont want to generate an API token, You can delete this and all instances of code that relate to anime facts. Doing this will disable the /fact command. 

GUILD_ID: Guild id for testing purposes until you decide to finalize with global commands.

CLIENT_ID: Client id for testing purposes until you decide to finalize with global commands.

## 4. Running the bot on your computer
```
npm start
```





