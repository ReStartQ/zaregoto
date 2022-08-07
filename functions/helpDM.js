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
            name: '?anime or /anime:', 
            value: 'Returns a random anime or lookup an anime with /anime. The name option for /anime is the same as ?anime-name. Replace the name option for /anime with the name of the anime that you are looking up.' 
        },
        { 
            name: '?anime-name:', 
            value: 'Look up an anime based on the name given. Replace name with the name of the anime that you are looking up.'
        },
        {   
            name: '?manga or /manga:', 
            value: 'Returns a random manga or light novel or lookup a manga or light novel with /anime. The name option for /manga is the same as ?manga-name. Replace the name option for /manga with the name of the manga or light novel that you are looking up.' 
        },
        { 
            name: '?manga-name:', 
            value: 'Look up a manga or light novel based on the name given. Replace name with the name of the manga or light novel that you are looking up.'
        },
		{   
            name: '?theme or /theme:', 
            value: 'Random anime op/ed theme song video.' 
        },
		{ 
            name: '?quote or /quote:', 
            value: 'Random anime quote.' 
        },
		{   
            name: '?pic or /pic:', 
            value: 'Random anime picture.'
        },
		{   
            name: '?fact or /fact:', 
            value: 'Random anime fact.'
        },
        { 
            name: '?gif or /gif:', 
            value: 'Random anime gif. Using /gif allows for an optional type for the gif.'
        },
        { 
            name: '__/gif type options__', 
            value: 'hug, cuddle, dance, poke, happy, wink, smile, wave, cry, kiss, lick, pat, smug, bully, bonk, yeet, blush, highfive' +
                   ' handhold, nom, bite, glomp, slap, kill, kick, cringe'
        },
        { 
            name: '?gif-option:', 
            value: 'Random anime gif based off of option specified.'
        },
        { 
            name: '__Replace option with one of the following below__:', 
            value: 'hug, cuddle, dance, poke, happy, wink, smile, wave, cry, kiss, lick, pat, smug, bully, bonk, yeet, blush, highfive' +
                   ' handhold, nom, bite, glomp, slap, kill, kick, cringe'
        },
        { 
            name: '?help or /help:', 
            value: 'The help menu.'
        },
        { 
            name: '__/help visibility options__:', 
            value: 'public (default, shows the help menu in the text channel), \n private (only you can see the help menu)'
        },
        { 
            name: '?help-DM:', 
            value: 'Sends the help menu in the user\'s DM'
        },
	);
    
    message.channel.send(
        'Check your **DM** for the help menu.'
    );
    message.author.send(
        {embeds:[exampleEmbed]}
    );
}

