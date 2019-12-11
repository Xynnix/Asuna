module.exports = {
    message : (bot,settings,Eris) => {
        bot.on("messageCreate", async msg => {
            if(msg.channel.type === 1) return
            if(!msg.content.startsWith(settings.prefix)) return
            if(msg.author.bot) return

            let prefix = settings.prefix
            let message = msg
            let args = message.content.slice(prefix.length).trim().split(' ');
            let cmd = args.shift().toLowerCase();
            let command;

            if (bot.commands.has(cmd)) {
                command = bot.commands.get(cmd);
                command.run(bot,message,args)
            } else if (bot.aliases.has(cmd)) {
                command = bot.commands.get(bot.aliases.get(cmd));
                command.run(bot,message,args)
            }
        });
    } 
}