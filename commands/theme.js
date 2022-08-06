const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('theme')
        .setDescription('Get an anime op/ed theme'),
    async execute(interaction) {
    
    }
}