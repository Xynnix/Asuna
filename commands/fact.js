const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client,message,args) => {
    let user = message.author.username
   fetch('https://nekos.life/api/v2/fact')
    .then(res => res.json())
    .then(json => {
        message.channel.send(`${user} here is a random fact \n${json.fact}`)
    })
}


module.exports.help = {
    name: "fact",
    aliases: ['knowlage']
}