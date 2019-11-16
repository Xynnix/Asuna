const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    var embed = new Discord.MessageEmbed()
        	.setTitle("confused?")        	
        	.addField("Need help with the bot?", "join Asuna's support [server](https://discord.gg/83KMdQE)")
    message.channel.send(embed);
}

module.exports.help = {
    name: "support",
    aliases: []
}
