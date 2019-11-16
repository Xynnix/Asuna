const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (bot,message,args) => {
	  if (message.channel.nsfw){// checks if channel is nsfw
    var user = message.author.username
     fetch('https://nekobot.xyz/api/image?type=anal')
    .then(res => res.json())
    .then(json =>{var embed = new Discord.MessageEmbed()
    .addField(":warning: NSFW :warning:", `${user} here is the anal you requested`)
    .setImage(json.message)
    .setFooter("Invite me to your server for more fun")
    message.channel.send(embed)})
    }else message.channel.send(":warning: This channel is not marked as Nsfw :warning:")
}


module.exports.help = {
    name: "anal",
    aliases: ['ass']
}
