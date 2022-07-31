const cacheMessage = require("../functions/cacheMessage")
const stringFormat = require("../functions/stringFormat")

module.exports = (client, lang, cfg) => {
    login(client, lang)
    
    cacheMessage(client, cfg.settings.verification.helloMessage.channelId, cfg.settings.verification.helloMessage.id)
}

login = (client, lang) => {
    console.log(stringFormat(lang.onReady.loggedAs, [ client.user?.tag ]))
    console.log(lang.onReady.loggedOn)
    let i = 0
    client.guilds.cache.forEach((guild) => {
        console.log(stringFormat(lang.onReady.serverInfo, [ guild.name, guild.id ]))
        i+=1
    })
    console.log(stringFormat(lang.onReady.serversCount, [ i ]))
}
