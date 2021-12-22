const Discord = require('discord.js');
const fs = require('fs');

const comms = require('./comms.js');

const { Client, Intents } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const config = require('./config.json');

client.once('ready', () => {
	console.log(`"${client.user.username}" started up`);
});


client.login(config.token);