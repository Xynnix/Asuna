const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
          	var helpembed = new Discord.MessageEmbed()
        	.setTitle("list of commands")
        	.setColor('#FE55FE')
        	.addField("Fun", "8ball, rate, roll, ship, fact")
			.addField("Images", "neko, coffee, food, cat, doggo, hug, cuddle, waifu, pat, tickle, slap, poke, kiss, nya, owo, meme")
        	.addField("Nsfw", "foxgirl, thigh, hthigh, spank, hentai, yuri, pussy, suck, trap, anal, boobs, fdom, futa, feet, cum,")
			.addField("Util", "modlist, server, suggestion, ban, kick, say, help, membercount, createrole, ping, hackban, unban, dm, info, serverinfo, invite, purge, report, createinvite")
			.addField("Beta", "music: play, skip, stop")
            .addField("Links", "<:PPtransparent:457295151396814848>   [donate](https://www.paypal.me/FloodL) \n:link:   [bot invite](https://goo.gl/y7RJFU) \n:link:   [support server](https://discord.gg/KjrfYgF) \n:link:   [vote](https://discordbots.org/bot/420907324945989632/vote)")
			message.channel.send(helpembed)
}

module.exports.help = {
	name: "help",
	aliases: ['h']
}
