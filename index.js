// imports
const { readdirSync } = require('fs');
const { Client, Intents } = require('discord.js');
const token = process.env.TOKEN ?? require('./config.json').token;

// initialise client
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS
]});

client.commands = new Map();

// register commands
readdirSync('./commands').forEach(file => {
    const { datas: { name }, execute } = require(`./commands/${file}`);
    client.commands.set(name, execute);
});

// register events
readdirSync('./events').forEach(file => {
    const { once, type, callback } = require(`./events/${file}`);

    (once) ?
        client.once(type, callback) :
        client.on(type, callback);
});

// login client
client.login(token);