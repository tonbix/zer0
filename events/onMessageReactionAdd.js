const reactionRole = require("../functions/roleEmoji")

module.exports = async (client, user, reaction, lang, cfg) => {
    const msg = reaction.message,
        member = await msg.guild.members.fetch(user.id)
        
    if (msg.id == cfg.settings.messages.helloMessage[0]) {
        reactionRole(reaction, "✅", cfg.settings.roles.onVerificationRoleId, member)
    }
}
