const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    var embed = new Discord.MessageEmbed()
        	.setTitle("invite me")        	
        	.addField("want to add me to your server?", "use this invite [link](https://goo.gl/y7RJFU)")
    message.channel.send(embed)
}

module.exports.help = {
    name: "invite",
    aliases: ['invites']
}
