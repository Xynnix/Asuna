const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client,message,args) => {
    var user = message.author.username
    let {body} = await superagent
    .get(`https://nekobot.xyz/api/image?type=coffee`);
    var embed = new Discord.MessageEmbed()
    .setTitle("Mmmm coffee")
    .setDescription(`Ahhh heres some nice coffee for you ${user}`)
    .setImage(body.message)
    message.channel.send(embed)
}


module.exports.help = {
    name: "coffee",
    aliases: []
}