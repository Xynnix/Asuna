const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client,message,args) => {
	  if (message.channel.nsfw){
        var user = message.author.username
        fetch(`https://nekobot.xyz/api/image?type=hentai`)
        .then(res => res.json())
        .then(json => {var embed = new Discord.MessageEmbed()
            .addField(":warning: NSFW :warning:", `${user} here is the hentai you requested`)
            .setImage(json.message)
            .setFooter("Invite me to your server for more fun")
            message.channel.send(embed)})
        }else message.channel.send(":warning: This channel is not marked as NSFW :warning:")
}


module.exports.help = {
    name: "hentai",
    aliases: []
}
