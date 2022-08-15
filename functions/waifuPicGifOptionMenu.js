const { EmbedBuilder } = require('discord.js');

module.exports.waifuPicGifOptionMenu = async(message) => {
    const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Zaregoto')
	.setURL('https://github.com/ReStartQ/zaregoto')
	.addFields(
        { name: '**?gif `<category>`**:', value: 'Get an anime gif based on category.'},
        { name: '__Replace__ **`<category>`** __with one of the following below__:', value: 'hug, cuddle, dance, poke, happy, wink, smile, wave, cry, kiss, lick, pat, smug, bully, bonk, yeet, blush, highfive, handhold, nom, bite, glomp, slap, kill, kick, cringe'},
        { name: '**Example**:', value: '**?gif** `hug`'}
	);

    await message.channel.send(
        {embeds:[exampleEmbed]}
    );
}

