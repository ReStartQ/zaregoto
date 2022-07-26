const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anime')
        .setDescription('Get an anime.')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('Lookup an anime')
                .setRequired(false)),
}