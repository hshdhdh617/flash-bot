Code Lock lock 
clinet.on("message", async DARMAN => {
  if (DARKMAN.content.startsWith("11")) {
    if (!DARKMAN.member.hasPermission("MANAGE_CHANNELS"))
      return DARKMAN.channel.send("");
    if (!DARKMAN.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
    DARKMAN.channel.overwritePermissions(DARKMAN.guild.id, {
      SEND_MESSAGES: false
    });
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(` 🔒 | Locked Channel
Channel Status : Send Message : ❌ `)     
      .setTimestamp()
    DARKMAN.channel.sendEmbed(embed);
  }
})
