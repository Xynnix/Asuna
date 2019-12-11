const {token} = require('../config.json');

module.exports = {
    ready : (bot) => {
        bot.connect();
        bot.on('ready', () => {
            console.log("Ready!")
        });
    }
};