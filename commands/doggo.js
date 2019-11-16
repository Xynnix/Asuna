const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client,message,args) => {
    fetch("https://random.dog/woof.json")
    .then(res => res.json())
    .then(json => {message.channel.send({"embed": {
        "description": `heres a cutre doggo, Woof`,
        "url": "https://discordapp.com",
        "color": 11733342,
        "footer": {
          "text": "Woof"
        },
        "image": {
          "url": json.url
        }
       
      }})})
}

module.exports.help = {
    name: "doggo",
    aliases: ['dog']
}
