const { EmbedBuilder } = require('discord.js');

module.exports.help = async(message, myType, visibility) => {
    const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Zaregoto')
	.setURL('https://github.com/ReStartQ/zaregoto')
	.setDescription('Help Menu')
	.addFields(
		{   
            name: '**?theme**:', 
            value: 'Random anime op/ed theme song video.' 
        },
		{ 
            name: '**?quote**:', 
            value: 'Random anime quote.' 
        },
		{   
            name: '**?pic**:', 
            value: 'Random anime picture.'
        },
		{   
            name: '**?fact**:', 
            value: 'Random anime fact.'
        },
        { 
            name: '**?gif**:', 
            value: 'Random anime gif.'
        },
        { 
            name: '**?gif-option**:', 
            value: 'Random anime gif based off of option specified.'
        },
        { 
            name: '__Replace **-option** with one of the following below__:', 
            value: '-hug, -cuddle, -dance, -poke, -happy, -wink, -smile, -wave, -cry, -kiss, -lick, -pat, -smug, -bully, -bonk, -yeet, -blush, -highfive, -handhold, -nom, -bite, -glomp, -slap, -kill, -kick, -cringe'
        },
        { 
            name: '**?help**:', 
            value: 'The help menu.'
        },
	);
    if(myType===0){
        message.channel.send(
            {embeds:[exampleEmbed]}
        );
    }
    else{
        if(visibility){
            message.reply({embeds:[exampleEmbed], ephemeral: visibility})
        }
        else{
            message.reply({embeds:[exampleEmbed]})
        }
    }
}

/* message.channel.send(
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
); */