const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Help Menu')	
        .addStringOption(option =>
            option.setName('visibility')
            .addChoices(
                { name: 'public', value: 'public' },
				{ name: 'private', value: 'private' },
            )
                .setDescription('Set the visibility of the help menu')
                .setRequired(false)),
}