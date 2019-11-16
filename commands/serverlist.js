exports.run = function (client, message) {

client.owners = client.users.get("165811958828761089")
if(message.author.id !== client.owners[0].id)return;
    let Table = require(`cli-table`);
    let table = new Table({
        head: [
            `ID`,
            `Name`,
            `Users`,
            `Bots`,
            `Total`
        ], colWidths: [30, 50, 10, 10, 10]
    });
    client.guilds.map(g =>
      table.push(
        [g.id, g.name, g.members.filter(u => !u.user.bot).size, g.members.filter(u => u.user.bot).size, g.members.size]
      ));
    require(`snekfetch`)
    .post(`https://hastebin.com/documents`)
    .set(`Content-Type`, `application/raw`)
    .send(table.toString())
    .then(r =>
       message.channel.send(`Im inside these servers! http://hastebin.com/` + r.body.key));
};
module.exports.help = {
    name: 'serverlist',
    aliases: []
};
