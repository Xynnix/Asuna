const Discord = require("discord.js");

module,exports.run = async (client,message,args) => {
    if(message.guild === null) message.channel.send("this is not a server");
    else	message.channel.send(message.guild.members.size + " members are in " + message.guild.name)
    
}

module.exports.help = {
    name: "membercount",
    aliases: ['mcount']
}