const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pic')
        .setDescription('Random anime quote.'),
    async execute(interaction) {
        
    }
}