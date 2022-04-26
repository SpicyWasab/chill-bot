#!/usr/bin/env node
// imports
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { clientId, guildId, token } = require('./config.json');
const { readdirSync } = require('fs');

// get commands
const commands = [];
readdirSync('./commands').forEach(file => {
    const { datas } = require(`./commands/${file}`);
    commands.push(datas.toJSON());
});

// request the api
const rest = new REST({ version: '10' }).setToken(token);
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
