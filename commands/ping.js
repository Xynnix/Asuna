module.exports.run = async (bot,message,args) => {
    let ping = bot.shards.reduce((a, b) => a + b.latency, 0);
    bot.createMessage(message.channel.id, `Pong! ${bot.shards.reduce((a, b) => a + b.latency, 0)}ms `);
    bot.createMessage(message.channel.id, {
        embed: {
          author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL,
          },
          color: 6,
          fields: [
          {
            name: "Bot Ping",
            value: `**${ping}ms**`,
            inline: false
          },
          {
            name: "API Ping",
            value: `**${ping}ms**`,
            inline: false
          }
        ],
        footer: {
          text: `Requested by ${message.author.username}#${message.author.discriminator}`
        }
    }
    })
}

module.exports.help = {
    name: "ping",
    aliases: [],
}