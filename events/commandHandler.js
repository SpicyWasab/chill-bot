module.exports = {
    type: 'interactionCreate',
    /**
     * @param {import('discord.js').Interaction} interaction 
     */
    async callback(interaction) {
        if(!interaction.isCommand()) return;
        
        const { client, commandName } = interaction;

        const execute = client.commands.get(commandName);

        if(!execute) return interaction.reply('Command inconnue !').catch(console.error);

        try {
            await execute(interaction);
        } catch(error) {
            const errorMessage = 'Désolé, une erreur est survenue avec la commande.';

            interaction.reply(errorMessage)
                .catch(e => interaction.editReply(errorMessage))
                .catch(console.error);
        }
    }
}