const utils = require('../global/utils');
const config = require('../settings/config.json');

module.exports.run = async (bot, message, args) => {

    //if(!message.member.permissions.has("MANAGE_MESSAGES") return message.channel.send("you do not have the permissions to use this command")
    let queue = bot.queue.get(message.guild.id);
    if (!message.member.voice.channel) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, please join a voice channel to run this command!`, `${config.prefix}stop`), 5000)];
    if (!queue) return [message.delete(), utils.timed_msg('⚠ No musics are being played.', 5000)];

    queue.musics = [];
    queue.connection.dispatcher.end();

};

module.exports.help = {
    name: 'stop',
    aliases: ['leave', 'fuckoff']
};
