const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    var object = message.content.substring(5)
    	var rating = Math.floor(Math.random() * 10) +1;
    message.channel.send( message.author.username + " **I give " + object + " an " + rating + "/10**")
}

module.exports.help = {
    name: "rate",
    aliases: []
}