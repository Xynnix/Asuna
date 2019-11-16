var Discord = require('discord.js');

module.exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars

  await message.delete();
  const user = message.mentions.users.first();
  const amount = !!parseInt(args[0]) ? parseInt(args[0]) : parseInt(args[1]);
  console.log(args);
  if (!amount) return message.reply('Must specify an amount to delete!');
  if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
  message.channel.messages.fetch({
     limit: amount
  }).then((messages) => {
   if (user) {
    const filterBy = user ? user.id : client.user.id;
    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
   }

    message.channel.bulkDelete(messages).catch((error) => {
      console.log(error.stack);
      return message.reply('There was an error in deleting the messages');
    });
  });

};

module.exports.help = {
  name: 'purge',
  aliases: []
};
