const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client,message,args) => {
  fetch('http://aws.random.cat//meow')
  .then(res => res.json())
  .then(json => message.channel.send({"embed": {
    "description": `hers a cute kitty cat`,
    "url": "https://discordapp.com",
    "color": 11733342,
    "footer": {
      "text": "Invite me to your server for more fun"
    },
    "image": {
      "url": json.file
    }
   
  }}));
}

module.exports.help = {
    name: "cat",
    aliases: ['kitty']
}