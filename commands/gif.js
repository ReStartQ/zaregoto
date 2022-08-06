const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gif')
        .setDescription('Get an anime gif')
        .addStringOption(option =>
            option.setName('type')
            .addChoices(
				{ name: 'hug', value: 'hug' },
                { name: 'cuddle', value: 'cuddle' },
                { name: 'dance', value: 'dance' },
                { name: 'poke', value: 'poke' },
                { name: 'happy', value: 'happy' },
                { name: 'wink', value: 'wink' },
                { name: 'smile', value: 'smile' },
                { name: 'wave', value: 'wave' },
                { name: 'cry', value: 'cry' },
                { name: 'kiss', value: 'kiss' },
                { name: 'lick', value: 'lick' },
                { name: 'pat', value: 'pat' },
                { name: 'smug', value: 'smug' },
                { name: 'bully', value: 'bully' },
                { name: 'bonk', value: 'bonk' },
                { name: 'yeet', value: 'yeet' },
                { name: 'blush', value: 'blush' },
                { name: 'highfive', value: 'highfive' },
                { name: 'handhold', value: 'handhold' },
                { name: 'nom', value: 'nom' },
                { name: 'bite', value: 'bite' },
                { name: 'glomp', value: 'glomp' },
                { name: 'kill', value: 'kill' },
                { name: 'kick', value: 'kick' },
                { name: 'cringe', value: 'cringe' },
            )
                .setDescription('Choose the type of gif you want.')
                .setRequired(false)),
}