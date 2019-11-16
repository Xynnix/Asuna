const Discord = require("discord.js");

module.exports.run = async (bot,message,args,client) => {
    if (args[0]){
    
    let g = bot.guilds.get(args[0])
    if (g){
    let channelID;
    let channels = g.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }
    let u = client.users.get("165811958828761089")
    let channel = client.channels.get(g.systemChannelID || channelID);
 channel.createInvite({maxAge: 0}).then(invite => {u.send(`${invite}`)})

}
else {
    message.channel.send("not in this guild")
}
}
}

module.exports.help = {
    name: "getserverinvite",
    aliases: ['getinvite']
}