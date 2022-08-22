const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('manga')
        .setDescription('Get a manga or light novel.')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('Search for a manga or light novel')
                .setRequired(false)),
}