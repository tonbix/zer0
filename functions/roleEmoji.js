module.exports = async(reaction, reactionName, roleId, member) => {
    const msg = reaction.message
    await msg.guild.roles.fetch()

    if (reaction.emoji.name === reactionName) {
        role = msg.guild.roles.cache.find(role => role.id === roleId)
        member.roles.add(role.id)
    }
}
