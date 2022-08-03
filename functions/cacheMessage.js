module.exports = (client, messageId, channelId) => {
    try{
        client.channels.cache.get(channelId).messages.fetch(messageId)
    }catch{
        console.log(lang.system.channelFetchError)
    }
}
