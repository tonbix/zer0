const Discord = require('discord.js'),
	{ Client, Intents } = require('discord.js'),
	fs = require('fs');

const client = new Discord.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES
	]
});

const config = require('./vars/config.json');
const messages = require('./vars/messages.json');

const lang = config.language;

require('./events')(client, messages, lang);

console.log('test');

client.login(config.token);