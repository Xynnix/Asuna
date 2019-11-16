const discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	if (message.author.id === "165811958828761089") {
		message.channel.send("are you sure you want to turn me off master")
		const collector = new discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 5000 })
		collector.on('collect', message => { 
		if (message.content === "no") { 
		message.channel.send("thank you for not turning me off ^~^")
		} 
		else if (message.content === "yes") { 
		message.channel.send("aww ok master good night")
		client.destroy()
	 }
	 })
	} 
	else message.channel.send("you are not my master *growls*")
	}
	

module.exports.help = {
	name: "kill",
	aliases: ['disable']
}
