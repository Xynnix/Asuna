const Discord = require("discord.js");
const credentials= require("../settings/credentials.json")
const Taihou = require("taihou")
const weebSH = new Taihou(credentials.weebtoken, true, {
   userAgent: 'Asuna beta / 1.0'
});

module.exports.run = async (client,message,args) => {
   const Discord = require("discord.js");
const credentials= require("../settings/credentials.json")
const Taihou = require("taihou")
const weebSH = new Taihou(credentials.weebtoken, true, {
   userAgent: 'Asuna beta / 1.0'
});

module.exports.run = async (client,message,args) => {
  const fetch = require("node-fetch");

  fetch("https://rra.ram.moe/i/r?type=owo")
  .then(res => res.json())
  .then(json => {
    message.channel.send({
      "embed": {
        "description": `OwO`,
        "url": "https://discordapp.com",
        "color": 11733342,
        "footer": {
        "text": "powered by weeb.sh"
        },
        "image": {
          "url": `https://rra.ram.moe${json.path}`
        }  
      }
     })
  })
}

module.exports.help = {
   name: "owo",
   aliases: ['uwu']
}
}

module.exports.help = {
   name: "owo",
   aliases: ['uwu']
}
