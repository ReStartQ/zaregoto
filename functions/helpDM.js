const { EmbedBuilder } = require('discord.js');

module.exports.helpDM = async(message) => {
    const exampleEmbed = new EmbedBuilder()
	.setColor(15105570)
    .setThumbnail('https://github.com/ReStartQ/zaregoto/blob/main/extra/Zaregoto%20icon.png?raw=true')
	.setTitle('Zaregoto')
	.setURL('https://github.com/ReStartQ/zaregoto')
	.setDescription('Help Menu')
	.addFields(
        { 
            name:   '__Information__ ', 
            value:  '*The following information is here to give a better comprehension of how this help menu is to be read.* \n'+
                    '**Optional options** are enclosed in square brackets **[*option*]** \n' +
                    '**Required options** are enclosed in angle brackets **<*option*>** \n' +
                    '**Slash** and **Prefix** Commands both offer the same functions. \n' +
                    '**Slash Commands** offer autocomplete options. \n'
        },
        { 
            name:   '__Options__ ', 
            value:  '**[name]**: ' +
                    'No predefined options. This value can be anything.\n' +
                    '**Example: ?manga-zaregoto** \n' +
                    '**[visibility]**: ' +
                    'public (default, in text channel), private () \n'+
                    '**Example: /help public.** \n' +
                    '**[category]**:  '+
                    'hug, cuddle, dance, poke, happy, wink, smile, wave, cry, kiss, lick, pat, smug, bully, bonk, yeet, blush, highfive, handhold, nom, bite, glomp, slap, kill, kick, cringe \n' +
                    '**Example: ?gif-hug **'
        },
        {   
            name:   '__Slash Commands__', 
            value:  '**/anime [name]**:  Random anime information. \n' +
                    '**/manga [name]**:  Random manga or light novel information. \n' +
                    '**/theme [name]**:  Gives an anime op/ed theme song video. \n' +
                    '**/quote**:  Random anime quote. \n' + 
                    '**/pic**:  Random anime picture. \n' +
                    '**/fact**:  Random anime fact. \n' +
                    '**/gif [category]**:  Random anime gif. \n' +
                    '**/help [visibility]**:  The help menu. \n' 
        },
		{   
            name:   '__Prefix Commands__', 
            value:  '**?anime**: Random anime information. \n' +
                    '**?anime-<name>**:  Look up an anime based on the [name] given. \n' +
                    '**?manga**:  Random manga or light novel information. \n' +
                    '**?manga-<name>**: Look up a manga or light novel based on the [name] given. \n' +
                    '**?theme**: Gives an anime op/ed theme song video. \n' +
                    '**?theme-<name>**: Lookup an anime op/ed theme song video based on the [name] given. If no exact matches are found, it will give a menu of search results to use as options for name. \n' +
                    '**?quote**: Random anime quote. \n' + 
                    '**?pic**: Random anime picture. \n' +
                    '**?fact**: Random anime fact. \n' +
                    '**?gif**:  Random anime gif. \n' +
                    '**?gif-<category>**:  Random anime gif based off of category specified. \n' +
                    '**?help**:  The help menu. \n' +
                    '**?help-DM**:  Sends the help menu in the user\'s DM'
        },
	);
    
    await message.channel.send(
        'Check your **DM** for the help menu.'
    );
    await message.author.send(
        {embeds:[exampleEmbed]}
    );
}

