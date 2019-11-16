const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client,message,args) => {
    var user = message.author.username
    fetch(`https://nekos.life/api/v2/img/waifu`)
    .then(res => res.json())
    .then(json => {
        var embed = new Discord.MessageEmbed()
        .setDescription(`${user} here is a cute waifu for you`)
        .setImage(json.url)
        message.channel.send(embed)
    })
}


module.exports.help = {
    name: "waifu",
    aliases: []
}
