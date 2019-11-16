const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client,message,args) => {
    var user = message.author.username
   fetch(`https://nekobot.xyz/api/image?type=food`)
   .then(res => res.json())
   .then(json => {
    var embed = new Discord.MessageEmbed()
    .setTitle("Mmmm food")
    .setDescription(`${user} here is some food`)
    .setImage(json.message)
    message.channel.send(embed)
   })
}


module.exports.help = {
    name: "food",
    aliases: ['foodz']
}