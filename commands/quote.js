const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Random anime quote.'),
    async execute(interaction) {
        
    }
}