const Discord = require('discord.js');
const ms = require("../minestat-needs")

module.exports.run = async (client,message,args) => {
  var server = message.content.substring(8)
	ms.init(server, 25565, function(result){
    if(ms.online){
  var embed = new Discord.MessageEmbed()
  .setTitle(`${server} status`)        	
  .addField(`${server} is online`, server)
  .addField("server version", ms.version)
  .addField(`message of the day`, ms.mofd)
  .addField("players", ms.current_players)
  .addField("max players", ms.max_players)
  .setColor("#B753F5")
 message.channel.send(embed)
    }
    else{
      message.channel.send(`${server} is currently offline or ip is invalid, please ensure that the ip is right`)
    }
})
}

module.exports.help = {
  name: "server",
  aliases: []
}