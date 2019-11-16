const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    message.channel.send("I am in " +  client.guilds.size + " servers ");
}

module.exports.help = {
    name: "servers",
    aliases: []
}