const discord = require("discord.js")

module.exports.run = async (client,message,args) => {
  if(!args[0]) {
    message.channel.send("cannot submit empty feedback")
  }
  else{
var channel = client.channels.get("463719943607681035")
var suggestion = args.slice().join(" ");
var s = new discord.MessageEmbed()
.setTitle("new suggestion")
.addField(`submitted by ${message.author.tag}`, suggestion)
.setColor("#000cba")
.setThumbnail(message.author.displayAvatarURL)
channel.send(s)
message.channel.send("thank you for submitting your feedback/suggestion we will read over it")
  }
}

module.exports.help = {
  name: "suggestion",
  aliases: []
}
