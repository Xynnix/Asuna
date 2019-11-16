const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    var member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(member){
        var embed = new Discord.MessageEmbed()
        .setDescription(`${message.author.username} has given ${member} a cookie :cookie:`)
        .setColor("#d8eb5e")
        message.channel.send(embed)
    }else{
        var embed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`:warning: oopsie :warning:`)
        .setDescription("Seems like you forgot to mention a user to give your cookie to")
        message.channel.send(embed)
    }
      //if (args[0]) message.channel.send(message.author.toString() + " has given " + args[0].toString() + " a cookie! :cookie:") 
      //  else message.channel.send("Who do you want to send a cookie to? :cookie: (Correct usage: %cookie @username)")
}

module.exports.help = {
    name: "cookie",
    aliases: []
}