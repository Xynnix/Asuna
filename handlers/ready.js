const {token} = require('../settings/credentials.json');

module.exports = {
    ready : (bot) => {
        bot.login(token)
        bot.on('ready', () => {
            
            //LOAD DATABASE
            bot.commandUsages.sync();

            bot.user.setActivity(`%help | in ${bot.guilds.size} servers`, {type: 'PLAYING'});
        });
    }
};