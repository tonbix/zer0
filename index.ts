import discord, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
})

client.on('ready', () => {
    console.log('"zer0" is ready')
})


client.login(process.env.TOKEN)
