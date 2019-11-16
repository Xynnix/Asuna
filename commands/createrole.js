const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    if(message.guild === null)message.channel.send("this iz not a server")
    else{
        var rolename = args.slice().join(" ");
        if(message.member.hasPermission('ADMINISTRATOR' || 'MANAGE_ROLES')){
            if(args[0]){
  /*          message.guild.createRole({
   name: rolename,
   hoist: false, 
   mentionable: false
   })*/
   message.guild.roles.create({
    data: {
      name: rolename,
    },reason: `created by ${message.author.username} id:${message.author.id}`,})
   message.channel.send("created role " + rolename);
   }
   else message.channel.send("cannot create a nameless role")
        }
        else message.channel.send("you do not have permissions")
    }
}

module.exports.help = {
    name: "createrole",
    aliases: ['cr']
}
