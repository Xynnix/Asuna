const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    if(message.author.id != "165811958828761089") {message.channel.send("You do not have permission")}
    else{
    if(!args[0] || args[0 === "help"]) message.channel.send("Please specify a server id to add permium to");
    if(!args[0] || args[0 === "help"]) return;
    if(!args[1]) message.channel.send("Please type either True or False to enable or disable premium for this guild")

    var server = bot.guilds.get(args[0])
    if (!server){
        message.channel.send("I am not in this server please chack the ID")
    }
    else{
    let premium = JSON.parse(fs.readFileSync("./serversettings/premium.json", "utf8"));
          
        if(args[1] === "True"){

    premium[args[0]] = {
    	premium: args[1]
    };
    
    fs.writeFile("./serversettings/premium.json", JSON.stringify(premium), (err) => {
    	if(err) console.log(err)
    });
    
    message.channel.send(`${server.name} has been given premium`)
            }
            else{if(args[1] === "False"){
                message.channel.send(`${server.name} has had premium removed`)

                premium[args[0]] = {
                    premium: args[1]
                };
                
                fs.writeFile("./serversettings/premium.json", JSON.stringify(premium), (err) => {
                    if(err) console.log(err)
                });

                }
                else(message.channel.send("Please type either True or False to enable or disable premium for this guild"))
            }
        }
    }
}


module.exports.help = {
    name: "addpremium",
    aliases: [`pgive`]
}
