
const Discord = require('discord.js');


var speedTest = require('speedtest-net');
module.exports.run = async (client, message ,args) => {
		const start = new Date().getTime();
		let duration = 0;
		duration = new Date().getTime() - start;
		const embed = new Discord.MessageEmbed()
.setColor('#36393f')
			.setDescription('Speedtest running ...');
		message.channel.send(embed);

		const test = speedTest({ maxTime: 5000 });

		test.on('data', data => {
			const download = data['speeds']['download'].toFixed(0) + ' MBit/s';
			const upload = data['speeds']['upload'].toFixed(0) + ' MBit/s';
			const host = `${data['server']['host']}`;
			const serverPing = `${ data['server']['ping']} ms`;
			const embed2 = new Discord.MessageEmbed().setColor('#36393f')
				.setDescription('Speedtest results')
				.addField('Download',download , true)
				.addField('Upload', upload, true)
				.addField('Host', "some random host", true)
				.addField('Server Ping', serverPing, true);
			message.channel.send(embed2)
});
};
module.exports.help = {
    name: "speedtest",
	aliases: []

}
