const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('theme')
        .setDescription('Get an anime op/ed theme song')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('Lookup an anime op/ed theme song')
                .setRequired(false)),
    async execute(interaction) {
    
    }
}