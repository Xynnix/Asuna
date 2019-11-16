const Discord = require("discord.js")
const fs = require("fs");


module.exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()
  .setTitle("Reload")
  .setDescription("Sorry, the `reload` command can only be executed by the Developer.")
  .setColor("#cdf785");
  if(message.author.id !== '165811958828761089') return message.channel.send(embed);

  try{
	let cmd = args[0]
	delete require.cache[require.resolve(`./${args[0]}.js`)];
	bot.commands.delete(cmd)
	const pull = require(`./${cmd}.js`)
	bot.commands.set(cmd, pull)
  let Aembed = new Discord.MessageEmbed()
  .setTitle("Reloading..")
  .setDescription(`${args[0]}.js successfully reloaded!`)

    return message.channel.send(Aembed);
     }catch(e){
     return message.channel.send("There is no such command!")
     }
}; 


module.exports.help = {
	name: "reload",
  aliases: [],
  hiddenFromCount: true
}