const Discord = require("discord.js");

exports.run = async (client, message, args, color) => {
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0, reason: `created by ${message.author.username} id: ${message.author.id}`}).then(invite => {
    let embed = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setDescription(`**Permanent Invite Link**: ${invite}`);
    message.channel.send(embed);
  });
}
exports.help = {
  name: 'createinvite',
  aliases: []
}
