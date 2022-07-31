const discord = require('discord.js'), { Intents } = require('discord.js')
    dotenv = require('dotenv')

    cfg = require('./json/config.json')

    lang = require(`./json/lang/${cfg.defaultLanguage}.json`)
dotenv.config()

const client = new discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})

client
.on('ready', () => require('./events/onReady')(client, lang, cfg))
.on('messageCreate', (message) => require('./events/onMessageCreate')(client, message))
.on('messageReactionAdd', (reaction, user) => require('./events/onMessageReactionAdd')(client, user, reaction, lang, cfg))


client.login(process.env.TOKEN)
