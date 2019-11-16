const Discord = require("discord.js");
const credentials= require("../settings/credentials.json")
const Taihou = require("taihou")
const weebSH = new Taihou(credentials.weebtoken, true, {
   userAgent: 'Asuna / 3.0'
});


module.exports.run = async (client,message,args) => {

   var tagged = message.mentions.members.first() || message.guild.members.get(args[0]);
   var user = message.author.username
  
   if(!tagged)message.channel.send("who do you want to cuddle??")
   else{
    if (tagged.id === client.user.id) {
       message.channel.send("yay cuddles!!!!")
   }
   else {
   if (tagged.id === message.author.id){
   message.channel.send("dont cuddle yourself baka!!!")    
   }
   else{	    
   var member = tagged.user.username
   weebSH.toph.getRandomImage('cuddle')
   .then(image => message.channel.send({
       "embed": {
         "description": `${user} has cuddled ${member}`,
         "url": "https://discordapp.com",
         "color": 11733342,
         "footer": {
           "text": "powered by weeb.sh"
         },
         "image": {
           "url": image.url
         }
        
       }
     }))
   .catch(err => console.error(`Oopsie, an error occurred: ${err}`));
  } 
 }
} 
}
module.exports.help = {
   name: "cuddle",
   aliases: ['cuddles']
}
