const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    const commandsSeq = await bot.commandUsages.findAll();

    let commands = [];
    let total = [];

    commandsSeq.forEach(command => {
        if (command.commandName == "total") {
            total.push(command);
        } else {
            commands.push(command);
        }
    })

    let topItemsMap = commands.sort((a, b) => b.usageCount - a.usageCount).map((command, position) => `**${position + 1}:** ${command.commandName} **|** Times Used: ${command.usageCount}`).slice(0, 10);

    let topItems = topItemsMap.join("\n");

    let totalString = `Total Commands Used: ${total[0].usageCount}`;

    

    const topItemsEmbed = new Discord.MessageEmbed()
        .setTitle(totalString)
        .setTimestamp()
        .setDescription(topItems)
        .setFooter("Made with love by jades daddy ;)");
        
        message.channel.send(topItemsEmbed);

}

module.exports.help = {
    name: "commandcount",
    aliases: ['cc'],
    hiddenFromCount: true
}
