const Discord = require('discord.js');

module.exports.run = async (client,message,args) => {
var reports = message.content.substring(7)
var splits = reports.split(' - ')
var reported = splits[0]
var desc = splits[1]
var invite = splits[2]
var proof = splits[3]
var id = splits[4]
var extra = splits[5]
const rc = client.channels.get("468500518918946846")



if(reported){
   if(desc){
     if(invite){
       if(proof){
         if(id){
            var rembed = new Discord.MessageEmbed()
            .setTitle("new report")
            .setColor('#ff0000')
            .addField("reported server", `${reported}`)
            .addField("report reason", `${desc}`)
            .addField("server invite", `${invite}`)
            .addField("server id", `${id}`)
            .addField("link proof", `${proof}`)
            .addField("extra info", `${extra}`)
         rc.send(rembed)
         message.channel.send('the report has been submitted')
        
         }else message.channel.send('please provide the required info `server id`');
       }else message.channel.send('please provide the required info `link proof`');
     }else message.channel.send('please provide the required info `server invite`');
   }else message.channel.send('please provide the required info `description`');
}else message.channel.send('please provide the required info `reported server`');

}

module.exports.help = {
 name: "report",
 aliases: []
}
