const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	if(message.member.hasPermission('ADMINISTRATOR')){
    var member = message.mentions.members.first() || message.guild.members.get(args[0]);
    var say = message.content.substring(26)
    if(member){
    	member.send(`${say}\n from ${message.author.username}`).catch(err => message.channel.send(`${err.name}: ${err.message}`));
	    message.channel.send(`messages sent to ${member}`);
    }
    else message.channel.send("mention a valid user")
    }
    else message.channel.send(`you do not have any permission ${message.author.username}`)
}

module.exports.help = {
    name: "dm",
    aliases: ['pm'],
    hiddenFromCount: true
}
