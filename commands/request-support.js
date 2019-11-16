const discord = require("discord.js");

exports.run = async (bot, message, args) => {
    message.channel.send("Are you sure you would like to request a Bot mod for support, This will invite a mod to this server")
    const collector = new discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 5000 })
    collector.on('collect', message => { 
    if (message.content === "no") { 
        message.channel.send("request has been aborted");
    } 
    else if (message.content === "yes") { 
        message.channel.send("Request for help has been posted please be wait for a offical bot mod to join and help")
        message.channel.createInvite({maxAge: 0}).then(invite => {
            let requestc = bot.channels.get("588463090505351192")
            let user = message.author.tag
            let server = message.guild.name
            let id = message.guild.id
            let embed = new discord.MessageEmbed()
            .setTitle("Help request")
            .setColor("#b163a3")
            .addField("Information", `Guild name: ${server}\nGuild ID: ${id}\nRequested by: ${user}\nUser ID: ${message.author.id}\nGuild owner: ${message.guild.owner.user.tag}`)
            .addBlankField()
            .addField("Invite", `[Guild invite](${invite})`)
            .setThumbnail(message.guild.iconURL)
            requestc.send(embed)
          });
 }
 })
}

exports.help = {
    name: "requestsupport",
    aliases: []
}