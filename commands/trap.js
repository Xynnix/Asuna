const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client,message,args) => {
	  if (message.channel.nsfw){
        var user = message.author.username
        fetch(`https://nekos.life/api/v2/img/trap`)
        .then(res => res.json())
        .then(json => {var embed = new Discord.MessageEmbed()
            .addField(":warning: NSFW :warning:", `${user} here is the trap you requested`)
            .setImage(json.url)
            .setFooter("Invite me to your server for more fun")
            message.channel.send(embed)})
        }else message.channel.send(":warning: This channel is not marked as NSFW :warning:")
}

module.exports.help = {
    name: "trap",
    aliases: []
}