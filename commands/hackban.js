let Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  let mid = message.content.split(' ').slice(1,2).join(' ');

  if (!message.member.permissions.has('ADMINISTRATOR'))return message.channel.send("You don't have permission to use this command.");
  if (!args[0]) return message.channel.send('Please specify a id to hackban')
  //if (message.guild.fetchBans(args[0])) return message.channel.send('User is already banned')
    client.fetchUser(mid).then(user => {
      message.guild.members.ban(user.id).catch(err => {
        message.channel.send("Failed to ban user "+user.username)
      })

 let Embed = new Discord.MEssageEmbed()
    .addField('Action:', 'Hack-Ban/ ID Ban')
    .setColor("#36393f")
    .setTimestamp()
    .addField("Alright, I banned the user", `${user.username}`)
message.channel.send(Embed)
    })
}


exports.help = {
  name: 'hackban',
  aliases: ["hb"]
};
