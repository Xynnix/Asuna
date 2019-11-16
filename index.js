const discord = require('discord.js');
const ytdl = require('ytdl-core');
const Sequelize = require('sequelize');
const YouTube = require('yt-search');
const ready = require('./handlers/ready');
const join = require("./handlers/join")
const leave = require("./handlers/leave")
const message = require('./handlers/message');
const config = require('./settings/config.json');
const utils = require('./global/utils');
const bot = new discord.Client();
const client = bot
require('./global/functions')(bot, utils, ytdl, config);

//SETUP DATABASE                            name    user     password
const commandUsagesSeq = new Sequelize("database", "user", "password", {
    host: "localhost",
    dialect: "sqlite",
    logging: false,
    // * SQLite only
    storage: "./data/commandUsages.sqlite",
});

// ASIGN DATABASE ACCESS TO BOT VAR
bot.commandUsages = commandUsagesSeq.define("commandUsages", {
    "commandName": Sequelize.TEXT,
    "usageCount": Sequelize.INTEGER
});

//SET PROCESS NAME
process.title = "Asuna Bot";
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.queue = new Map(); // Music Queue
bot.votes = new Map(); // Vote Skip
ready.ready(bot);
message.message(bot, utils, config, discord, client);
join.join(bot);
leave.leave(bot);
