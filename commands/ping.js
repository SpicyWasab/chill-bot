const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    datas: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Ping !'),
    /**
     * @param {import('discord.js').CommandInteraction} interaction 
     */
    async execute(interaction) {
        await interaction.reply('Pong !');
    }
}