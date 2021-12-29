const Discord = require('discord.js'),
	{ Client, Intents } = require('discord.js'),
	fs = require('fs'),
	util = require('util');

const client = new Discord.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES
	]
});

const config = require('./vars/config.json');
const messages = require('./vars/messages.json');
const prefix = config.prefix;

const lang = config.language;

require('./events')(util, client, messages, lang, prefix);

client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync('./commands');

for (const file of commandsFiles) {
	const commandsArr = require(`./commands/${file}`);
	commandsArr.names.forEach(el => {
		client.commands.set(el, commandsArr);
	});
}


client.login(config.token);