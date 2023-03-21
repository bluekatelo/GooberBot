const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Replies!'),
    async execute(interaction) {
        await interaction.reply('Test these nuts!');
    },
};