const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Help Menu.')	
        .addStringOption(option =>
            option.setName('visibility')
            .addChoices(
				{ name: 'private', value: 'sends help menu by DM' },
				{ name: 'public', value: 'sends help menu in channel (Default)' },
            )
                .setDescription('Set DM for dm message or channel to post it in channel')
                .setRequired(false)),
    async execute(interaction) {
        
    }
}