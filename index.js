const Eris = require("eris");
const ready = require('./events/ready');
const message = require('./events/message');
const settings = require("./config.json");


var bot = new Eris(settings.token);
var client = bot
require('./functions/functions')(bot);

ready.ready(bot)
message.message(bot, settings, Eris)
bot.commands = new Eris.Collection();
bot.aliases = new Eris.Collection();