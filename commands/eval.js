const Discord = require("discord.js");
const request = require('snekfetch');
const fs = require('fs');
const parseTime = function(milliseconds) {
    var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
    var minutes = Math.floor(seconds/60); seconds %= 60;
    var hours = Math.floor(minutes/60); minutes %= 60;
    var days = Math.floor(hours/24); hours %= 24;
    var weeks = Math.floor(days/7); days %= 7;
    var years = Math.floor(days/365); days %= 365;
    var decades = Math.floor(years/10); years %= 10;
    var centuries = Math.floor(decades/10); decades %= 10;
    var written = false;
    return(centuries?(written=true,`${centuries === 1 ? centuries+" Century" : centuries+" Centuries"}`):"")+(written?", ":"")
      +(decades?(written=true,`${decades == 1 ? decades+" Decade" : decades+" Decades"}`):"")+(written?", ":"")
      +(years?(written=true,`${years === 1 ? years+" Year" : years+" Years"}`):"")+(written?", ":"")
      +(weeks?(written=true,`${weeks === 1 ? weeks+" Week" : weeks+" Weeks"}`):"")+(written?", ":"")
      +(days?(written=true,`${days === 1 ? days+" Day" : days+" Days"}`):"")+(written?", ":"")
      +(hours?(written=true,`${hours == 1 ? hours+" Hour" : hours+" Hours"}`):"")+(written?", ":"")
      +(minutes?(written=true,`${minutes === 1 ? minutes+" Minute" : minutes+" Minutes"}`):"")+(written?", ":"")
      +(seconds?(written=true,`${seconds === 1 ? seconds+" Second" : seconds+" Seconds"}`):"")+(written?" ":"");
};
module.exports.run = async (client,message,args) => {
client.owners = [client.users.get("165811958828761089")];
if(message.author.id !== client.owners[0].id)return;
try{
      const code = message.content.split(" ").slice(1).join(" ");
      if(!code)return message.channel.send('i *do* need smth to eval, right?');
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled, { depth: 0 });

if(evaled.length > 1024){
fs.writeFile("./output.txt",(evaled), (err) => {
if (err) console.log(err)
});
return message.channel.send('ayy ... the output was longer than 1024 in length, so i put it in this file ... yw',{file: './output.txt'});
};

    if(code.includes('client.token'))throw new Error("No Thanks");
    if(code.includes('bot.token'))throw new Error("No Thanks");

     let evbed = new Discord.MessageEmbed()
     .setTimestamp()
     .setColor("#36393f")
     .addField('**Input:**', '```js\n'+ code +'```')
	 .addField('**Output:**', '```js\n'+ evaled +'```')
      message.channel.send({embed: evbed});

	} catch (err) {
    let errbed = new Discord.MessageEmbed()
    .setColor("#36393f")
	.setTimestamp()
	.addField('**Error:**', '```js\n'+ err +'```')
    message.channel.send({embed: errbed});
    }


};

module.exports.help = {
    name: "eval",
    aliases: [],
    hiddenFromCount: true
  }
