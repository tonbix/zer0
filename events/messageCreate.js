module.exports = (util, client, message, prefix, messages, lang) => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;
    const
        messageArr = message.content.replace(prefix, '').split(' '),
        messageCommand = messageArr[0].toLowerCase(),
        args = messageArr.slice(1),

        commandRun = client.commands.get(messageCommand);

    if (commandRun) commandRun(util, message, messages, lang);
};