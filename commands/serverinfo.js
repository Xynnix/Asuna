const Discord = require('discord.js');
let longify = require('nekos-longify-function');
function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};

module.exports.run = (client, message, args) => {
const verificationLevels = {
    0: "None",
    1: "Low",
    2: "Medium",
    3: "High",
    4: "Very High"
};
const contentFilterLevels = {
    0: "None",
    1: "Medium",
    2: "High"
};
  let guild = message.guild;
  let icon = message.guild.iconURL;
  let createdAtRaw = guild.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");
  let bots = message.guild.members.filter(m => m.user.bot).size;
  let humans = message.guild.members.filter(m => !m.user.bot).size;
  let channels = message.guild.channels.size;
  let textChannels = message.guild.channels.filter(m => m.type == "text").size;
  let voiceChannels = message.guild.channels.filter(i => i.type == "voice").size;
  let emojis = [];
  guild.emojis.forEach(emoji => {
  emojis.push(`\`${emoji}\``);
  });
  emojis.length === 0 ? emojis = "None" : emojis = emojis.join(", ");

  let roles = [];
  guild.roles.forEach(role => {
    roles.push(`\`${role.name}\``);
  });
  roles = roles.join(", ");
  const highestRole = message.guild.roles.sort((a, b) => a.position - b.position).map(role => role.toString()).slice(1).reverse()[0]
  let Embed = new Discord.MessageEmbed()
  .setTitle(`Server Info`)
  .setColor("#36393f")
  .setThumbnail(icon)
.addField("📛 Guild Name" ,`${guild.name}`)
 .addField("🆔 Guild ID", `${guild.id}`,true)
 .addField("🤵 Guild Owner", `${guild.owner.user.tag}`, true)
 .addField("📌 Server Created",`${message.guild.createdAt.toString().substr(0, 15)},\n${checkDays(message.guild.createdAt)}`, true)
.addField("🗻 Region", `${message.guild.region}`, true)
.addField("☑ Verification", `${message.guild.verificationLevel}`,true)
.addField("🌐 Features", `${message.guild.features.join(', ') || 'None'}**`, true)
.addField("🤵 Users", `${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}`,true)
.addField("🤖 Bots", `${message.guild.members.filter(m => m.user.bot).size}`,true)
.addField("📲 Channels", `${message.guild.channels.filter(ch => ch.type === "text").size} Text | ${message.guild.channels.filter(ch => ch.type === "voice").size} Voice`, true)
.addField("🏷 Roles", `${message.guild.roles.size} roles | Highest Role ${highestRole}`, true)
.addField("📤 Other", `AFK  After ${message.guild.afkTimeout / 60} min | Large - ${message.guild.large}| Content Level - ${contentFilterLevels[message.guild.explicitContentFilter]} | Emojis - ${guild.emojis.size}`, true)












  message.channel.send(Embed);
}


module.exports.help = {
  name: 'serverinfo',
  aliases: []
};
