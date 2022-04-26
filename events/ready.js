module.exports = {
    once: true,
    type: 'ready',
    callback(client) {
        console.log(`Successfully connected as ${client.user.tag} !`);
    }
}