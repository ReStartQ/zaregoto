const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('theme')
        .setDescription('Random anime op/ed theme'),
    async execute(interaction) {
    
    }
}