const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    if(message.guild === null)message.channel.send("this is a server only command")
    	else{
    	var member = message.mentions.members.first() || message.guild.members.get(args[0]);
		var reason = message.content.substring(27)
		if(!member) return message.channel.send("Please mention a valid user");
    	if(message.member.hasPermission('BAN_MEMBERS' || 'ADMINISTRATOR')){
    		if(args[0]){
    			if(member){
    			if(member.bannable){
					
    				message.guild.members.ban(member)
    				message.channel.send(member + " had been banned for : " + reason)
				}
    			else message.channel.send("cannot ban member my role is too low or they are admin")
    			}
    			else message.channel.send("please mention a valid user")
    		}
    		else message.channel.send("`%ban (user)`")
    	}
    	else message.channel.send("you do not have permission to ban")
    	}
}

module.exports.help = {
	name: "ban",
	aliases: ['permkick']
}
