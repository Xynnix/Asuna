const Discord = require("discord.js");
const fetch = require("node-fetch")
module.exports.run = async (client,message,args) => {

   var tagged = message.mentions.members.first() || message.guild.members.get(args[0]);
   var user = message.author.username
  
   if(!tagged)message.channel.send("who do you want to kiss??")
   else{
    if (tagged.id === client.user.id) {
       message.channel.send("*blushes* oh my hehe~")
   }
   else {
   if (tagged.id === message.author.id){
   message.channel.send("awe you got nobody")    
   }
   else{	    
   var member = tagged.user.username
   fetch("https://weebs4life.ga/api/kiss")
   .then(res => res.json())
   .then(json => { 
    var member = tagged.user.username
    let embed = new Discord.MessageEmbed()
    .setDescription(`${user} has kissed ${member}`)
    .setImage(json.url)
    .setFooter("powered by weebs4life.ga/api")
    message.channel.send(embed)
   })
  } 
 }
} 
}
module.exports.help = {
   name: "kiss",
   aliases: ['kisses']
}
