const Discord = require("discord.js");

var roast = [
    "your mother is so stupid she fed cat food to her pussy",
    "wanna hear a joke....your face",
    "you're so fat when you jump the earth shakes",
    "what did god say when he made the first black person.....oh shit i burt one",
    "you're so ugly air even runs away from you",
    "you are so stupid you would starve in your own kitchen",
    "you are so stupid you think a condom is a type of baloon",
    "wanna hear a story..your love life....wait that's a joke"
]

module.exports.run = async (client,message,args) => {
    message.reply(roast[Math.floor(Math.random() * roast.length)]);
}

module.exports.help = {
    name: "roast",
    aliases: []
}