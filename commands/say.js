const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    if (message.member.hasPermission('ADMINISTRATOR') || message.author.id === '165811958828761089') {
        var newmsg = args.join(" ");
        message.delete().catch();
        message.channel.send(newmsg);
    }
    else message.channel.send("You do not have the permission for this command.")
}

module.exports.help = {
    name: "say",
    aliases: ['copy']
}
