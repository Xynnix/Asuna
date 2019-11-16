const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client,message,args) => {
    message.channel.send("If you would like to get premium donate to us on [patreon](https://www.patreon.com/AsunaDbot)  ")
}

module.exports.help = {
    name: "premium",
    aliases: ['prem'],
    hiddenFromCount: true
}