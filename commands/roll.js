const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
      var roll = Math.floor(Math.random() * 100) +1;
        message.reply("you rolled " + roll);
}

module.exports.help = {
    name: "roll",
    aliases: []
}