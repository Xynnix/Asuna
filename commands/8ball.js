const Discord = require("discord.js");

var eightball = [ 
        "yes!",
        "no...",
        "maybe?",
        "probably",
        "I don't think so.",
        "never!",
        "you can try...",
        "up to you!",
        "OH HELLL NAW!!!!!!",
]

module.exports.run = async (bot,message,args) => {
     if (args[0] != null) {// checks if args[0] has a question
        var embed = new Discord.MessageEmbed()
        .setTitle("8ball know all")
        .addField("The answer is...", eightball[Math.floor(Math.random() * eightball.length).toString(16)] )
        message.channel.send(embed)
    }
    
     else message.channel.send("what is your question? {usage %8ball question}")// if no question send this message to chat
}

module.exports.help = {
    name: "8ball",
    aliases: ['8b']
}
