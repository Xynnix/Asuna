    
exports.run = (client, msg) => {
        msg.channel.send(`:notes: Currently playing some music in **${client.voice.connections.size}** voice channels.`);
}
exports.help = {
  name: 'connections',
  aliases: []
};
