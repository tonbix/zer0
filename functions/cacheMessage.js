module.exports = (client, channelId, messageId) => {
    try{
        client.channels.cache.get(channelId).messages.fetch(messageId)
    }catch{
        console.log(lang.system.channelFetchError)
    }
}
