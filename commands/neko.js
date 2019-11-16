const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client,message,args) => {
    var user = message.author.username
    fetch(`https://weebs4life.ga/api/neko`)
    .then(res => res.json())
    .then(json => {
        var embed = new Discord.MessageEmbed()
        .setDescription(`${user} here is a cute neko`)
        .setImage(json.url)
        .setFooter("powered by weebs4life.ga/api")
        message.channel.send(embed)
    })
}


module.exports.help = {
    name: "neko",
    aliases: ['catgirl']
}
