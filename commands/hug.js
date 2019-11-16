const Discord = require("discord.js");
const fetch = require("node-fetch")

module.exports.run = async (client,message,args) => {

   var tagged = message.mentions.members.first() || message.guild.members.get(args[0]);
   var user = message.author.username
  
   if(!tagged)message.channel.send("who do you want to hug??")
   else{
    if (tagged.id === client.user.id) {
       message.channel.send("yay huggies!!!!")
   }
   else {
   if (tagged.id === message.author.id){
   message.channel.send("dont hug yourself baka!!!")    
   }
   else{
     fetch("https://weebs4life.ga/api/hug")
     .then(res => res.json())
     .then(json => { 
      var member = tagged.user.username
      let embed = new Discord.MessageEmbed()
      .setDescription(`${user} has hugged ${member}`)
      .setImage(json.url)
      .setFooter("powered by weebs4life.ga/api")
      message.channel.send(embed)
     })
  } 
 }
} 
}
module.exports.help = {
   name: "hug",
   aliases: ['hugs']
}
