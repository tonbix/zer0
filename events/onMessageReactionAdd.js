const reactionRole = require("../functions/roleEmoji")

module.exports = async (client, user, reaction, lang, cfg) => {
    const msg = reaction.message,
        member = await msg.guild.members.fetch(user.id)
        
    if (msg.id == cfg.settings.verification.helloMessage.id) {
        reactionRole(reaction, "✅", cfg.settings.verification.onVerificationRoleId, member)
    }
}
