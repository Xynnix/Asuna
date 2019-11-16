const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("you do not have permission");
    if(!args[0] || args[0 === "help"]) message.channel.send("%prefix <wanted prefix>");
    if(!args[0] || args[0 === "help"]) return;
    
    let prefixes = JSON.parse(fs.readFileSync("./serversettings/prefixes.json", "utf8"));
          
    prefixes[message.guild.id] = {
    	prefixes: args[0]
    };
    
    fs.writeFile("./serversettings/prefixes.json", JSON.stringify(prefixes), (err) => {
    	if(err) console.log(err)
    });
    
    message.channel.send(`prefix set to ${args[0]}`)
}


module.exports.help = {
    name: "prefix",
    aliases: []
}
