module.exports = (client, messages, lang) => {
        client
    .once('ready', () => require('./ready')(client, messages, lang))
    .on('messageCreate', (message) => {
        
    });
}