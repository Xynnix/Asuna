const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    message.channel.send(client.users.size + " total members in all guilds")
}

module.exports.help = {
    name: "members",
    aliases: ['smembers']
}