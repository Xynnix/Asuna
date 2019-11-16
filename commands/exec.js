const childProcess = require('child_process');
var i = "```"
exports.run = (client, message, args, data, errors) => {
  client.owners = [client.users.get("165811958828761089")];
if(message.author.id !== client.owners[0].id)return;
    childProcess.exec(args.join(' '), {},
        (err, stdout, stderr) => {
            if (err) return message.channel.send(`${i}${err.message}${i}`);
            message.channel.send(`${i}${stdout}${i}`);
        });
}



exports.help = {
  name: 'exec',
  aliases: []
};
