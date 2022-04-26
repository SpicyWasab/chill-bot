const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    datas: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Admirez la photo de profil d\'un autre membre.')
        .addUserOption(o => o
            .setName('membre')
            .setDescription('Le membre dont vous voulez voir la photo de profil')
            .setRequired(false)
        ),
    /**
     * @param {import('discord.js').CommandInteraction} interaction 
     */
    async execute(interaction) {
        const { options, member } = interaction;
        const target = options.getMember('membre') ?? member;

        const avatarURL = target.displayAvatarURL({
            dynamic: true,
            size: 512 // will become an option later
        });

        const embed = new MessageEmbed()
            .setTitle('Avatar')
            .setDescription(`Avatar de ${target}.\nVous pouvez le voir en grand à [cette adresse](${avatarURL})`)
            .setColor('RANDOM')
            .setImage(avatarURL)
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    }
}