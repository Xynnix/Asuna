const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	var owner = client.users.get("165811958828761089")
    var infoembed = new Discord.MessageEmbed()
    .setTitle("Information")
    .addField("I am " + client.user.username , "Nice to meet you")
    .addField("In " + client.guilds.size + " servers" , "Ohhhh many servers")
    .addField(`With ${(client.guilds.reduce((a,b) => a + b.memberCount,0)).toLocaleString()} members` , "So many masters >~<")
    .addField(`Made by ${owner.tag}` , "gifs are generated using the nekos.life api")
    .setColor('#ff0093')
    .setFooter("%invite to add me")
    message.channel.send(infoembed)
}

module.exports.help = {
    name: "info",
    aliases: ['information']
}
