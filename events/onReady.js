const cacheMessage = require("../functions/cacheMessage")
const stringFormat = require("../functions/stringFormat")

module.exports = (client, lang, cfg) => {
    let messages = [
        [cfg.settings.messages.helloMessage[0], cfg.settings.messages.helloMessage[1]],
        [cfg.settings.messages.rulesMessage[0], cfg.settings.messages.rulesMessage[1]]
    ]

    onLogin(client, lang)
    cacheMessages(client, messages, cfg)
}

onLogin = (client, lang) => {
    console.log(stringFormat(lang.onReady.loggedAs, [ client.user?.tag ]))
    console.log(lang.onReady.loggedOn)
    let i = 0
    client.guilds.cache.forEach((guild) => {
        console.log(stringFormat(lang.onReady.serverInfo, [ guild.name, guild.id ]))
        i+=1
    })
    console.log(stringFormat(lang.onReady.serversCount, [ i ]))
}

cacheMessages = (client, messages, cfg) => {
    messages.forEach(element => {
        cacheMessage(client, element[0], element[1])
    });
}
