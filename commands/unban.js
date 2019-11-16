exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
	const Discord = require('discord.js');
	let member = args[0];
	if (isNaN(member)) return message.reply('Please give a user ID to unban');


	const reason = args.splice(1, args.length).join(' ');

	message.guild.members.unban(member).then(() => {
		const embed = new Discord.MessageEmbed()
			.setColor("#36393f")
			.setTitle('User unbanned')
			.addField(`User`, `${member}`)
			.addField(`Moderator`, `${message.author.tag} (${message.author.id})`)
			.addField(`Reason`, `${reason}`)
     message.channel.send(embed)
			.catch((err) => {
				console.log(err);
			});
	})
		//.catch(error => message.reply(`Sorry, I couldn't unban because of : ${error}`));

};



exports.help = {
    name: 'unban',
    aliases: []
};