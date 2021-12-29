module.exports = async (util, message, messages, lang) => {
    start = message.createdTimestamp;
    message.reply(util.format(messages[lang].pong, Date.now() - start));
};
module.exports.names = ['ping', 'пинг'];