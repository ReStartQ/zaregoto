const { EmbedBuilder } = require('discord.js');

module.exports.help = async(message, myType, visibility) => {
    const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Zaregoto')
    .setURL('https://github.com/ReStartQ/zaregoto')
	.setDescription( '**HELP MENU**')
	.addFields(
        {
            name:   '__Commands:__',
            value:  '*Options are denoted with angle brackets* **<option>** \n'+
                    '**/anime <name>** - ' + 'Look up an anime. \n' +
                    '**/manga <name>** - ' + 'Look up a manga or light novel. \n' +
                    '**/theme <name>** - ' + 'Look up an anime op/ed theme song. \n' +
                    '**/gif <category>** - ' + 'Get an anime gif from a category. \n' +
                    '**/anime** - Get a random anime.\n'+
                    '**/manga** - Get a random manga.\n' +
                    '**/theme** - Get a random anime op/ed theme song.\n'+
                    '**/gif** - Get an anime gif from any category. \n' +
                    '**/quote** - Get an anime quote. \n' + 
                    '**/pic** -  Get an anime picture. \n' +
                    '**/fact** -  Get an anime fact. \n' +
                    '**/help** -  The help menu.\n'
        },
        { 
            name:   '__Option Values:__ ', 
            value:  '*These are the possible values that an* **<option>** *can be.*\n'+
                    '**<name>**: ' +
                    'Any value accepted. \n' +
                    '**<category>**: '+
                    'hug, cuddle, dance, poke, happy, wink, smile, wave, cry, kiss, lick, pat, smug, bully, bonk, yeet, blush, highfive, handhold, nom, bite, glomp, slap, kill, kick, cringe \n'
        },
        {
            name:   '__Command Usage Examples:__',
            value:  '*The usage of* `option:` *indicates that the option has been selected or autocompleted.*\n' +
                    '**/anime** `name: Bakemonogatari` \n'+
                    '**/manga** `name: Zaregoto` \n' +
                    '**/theme** `name: Bakemonogatari-OP1` \n'+
                    '**/gif** `category: hug` \n' 
        },
	);

    if(myType===0){
        await message.channel.send(
            {embeds:[exampleEmbed]}
        );
    }
    else{
        if(visibility){
            await message.reply({embeds:[exampleEmbed], ephemeral: visibility})
        }
        else{
            await message.reply({embeds:[exampleEmbed]})
        }
    }
}

/* .setThumbnail('https://github.com/ReStartQ/zaregoto/blob/main/extra/Zaregoto%20icon.png?raw=true') */

/* '**Examples: ** '+
'?manga Zaregoto or /manga `name: Zaregoto` \n'+

'**Examples: ** '+
'?help or /help `visibility: private` \n'+

'**Examples: ** '+
'?gif hug or /gif `category: hug` \n' */


/* {   
    name:   '__Commands__', 
    value:  '**?anime**: Random anime. \n' +
            '**?manga**: Random manga or light novel. \n' +
            '**?theme**: Random anime op/ed theme song video. \n' +
            '**?quote**: Random anime quote. \n' + 
            '**?pic**: Random anime picture. \n' +
            '**?fact**: Random anime fact. \n' +
            '**?gif**:  Random anime gif. \n' +
            '**?anime `<name>`**:  Look up an anime with <name> option. \n' +
            '**?manga `<name>`**: Look up a manga or light novel with <name> option. \n' +
            '**?theme `<name>`**: Lookup an anime op/ed theme song video with <name> option. \n' +
            '**?gif `<category>`**:  Get an anime gif based off of category. \n' +
            '**?help**:  Help menu. \n' +
            '**?helpDM**:  Sends help menu to user\'s DM \n'
}, */