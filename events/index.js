module.exports = (util, client, messages, lang, prefix) => {
        client
    .once('ready', () => require('./ready')(client, messages, lang))

    .on('messageCreate', (message) => require('./messageCreate')(util, client, message, prefix, messages, lang));
}