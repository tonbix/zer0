module.exports = (client, messages, lang) => {
    console.log(messages[lang].system.lang, lang);
        client.guilds.cache.forEach(guild => {
            console.log(messages[lang].system.aboutServer, guild.name, guild.id);
        });
        console.log(messages[lang].system.startup, client.user.username);
}