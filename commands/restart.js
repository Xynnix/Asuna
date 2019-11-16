const discord = require("discord.js");
const fs = require("fs")

module.exports.run = async (client,message,args) => {
	
	let config = JSON.parse(fs.readFileSync("./config.json", "utf8"));
	
	if (message.author.id === "311187081135128576") {
		message.channel.send("are you sure you want to restart me master?")
		const collector = new discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 5000 })
		collector.on('collect', message => { 
		if (message.content === "no") { 
		message.channel.send("okay i will not restart ^~^")
		} 
		else if (message.content === "yes") { 
		message.channel.send("okay master I shall restart \n restarting.....")
		client.destroy()
		client.login(config.token)
	 }
	 })
	} 
	else message.channel.send("you are not my master *growls*")
	}
	

module.exports.help = {
	name: "reset",
	aliases: []
}