module.exports = {

    message: (bot, utils, config, discord) => {

        async function addToTotalCommandCount() {
            //TRY TO FIND COMMAND
            let commandExists = await bot.commandUsages.findOne({
                where: {
                    "commandName": "total"
                }
            })

            if (!commandExists) {
                //CREATE COMMAND COUNT IN DATABASE
                await bot.commandUsages.create({
                    "commandName": "total",
                    "usageCount": 1,
                })
            } else {
                //INCREMENT COMMAND USAGE
                commandExists.increment("usageCount")
            }
        }
        bot.on('message', async message => {
            const fs = require("fs");

            if (message.author.bot) return;
            if (message.channel.type === "dm") {

                let prefix = config.prefix;
                let args = message.content.slice(prefix.length).trim().split(' ');
                let cmd = args.shift().toLowerCase();
                let command;

                utils.load(discord, bot, config, message, args, message.guild);
                if (!message.content.startsWith(prefix)) return;
                if (bot.commands.has(cmd)) {
                    command = bot.commands.get(cmd);
                } else if (bot.aliases.has(cmd)) {
                    command = bot.commands.get(bot.aliases.get(cmd));
                }
                if (config.commandNotFound == true) {
                    try {
                        command.run(bot, message, args);

                        //RETURN IF COMMAND SHOULD BE HIDDEN FROM COUNT
                        if (command.help.hiddenFromCount == true) return;
                        //TRY TO FIND COMMAND
                        let commandExists = await bot.commandUsages.findOne({
                            where: {
                                "commandName": command.help.name
                            }
                        })

                        if (!commandExists) {
                            //CREATE COMMAND COUNT IN DATABASE
                            await bot.commandUsages.create({
                                "commandName": command.help.name,
                                "usageCount": 1,
                            })
                        } else {
                            //INCREMENT COMMAND USAGE
                            commandExists.increment("usageCount")
                        }
                        addToTotalCommandCount();
                    } catch (err) {
                        if (err) utils.timed_msg(utils.cmd_fail(`Command \`${cmd}\` is not found!`, `${prefix}play <MUSIC/URL>`), 5000);
                    }
                } else {
                    try {
                        command.run(bot, message, args);
                        //RETURN IF COMMAND SHOULD BE HIDDEN FROM COUNT
                        if (command.help.hiddenFromCount == true) return;
                        //TRY TO FIND COMMAND
                        let commandExists = await bot.commandUsages.findOne({
                            where: {
                                "commandName": command.help.name
                            }
                        })

                        if (!commandExists) {
                            //CREATE COMMAND COUNT IN DATABASE
                            await bot.commandUsages.create({
                                "commandName": command.help.name,
                                "usageCount": 1,
                            })
                        } else {
                            //INCREMENT COMMAND USAGE
                            commandExists.increment("usageCount")
                        }
                        addToTotalCommandCount();
                    } catch (err) {
                        if (err) return undefined;
                    }
                }
            } else {
                let prefixes = JSON.parse(fs.readFileSync("./serversettings/prefixes.json", "utf8"))
                if (!prefixes[message.guild.id]) {
                    prefixes[message.guild.id] = {
                        prefixes: config.prefix
                    };
                }

                let prefix = prefixes[message.guild.id].prefixes

                //let prefix = config.prefix;
                let args = message.content.slice(prefix.length).trim().split(' ');
                let cmd = args.shift().toLowerCase();
                let command;

                utils.load(discord, bot, config, message, args, message.guild);
                if (!message.content.startsWith(prefix)) return;
                if (bot.commands.has(cmd)) {
                    command = bot.commands.get(cmd);
                } else if (bot.aliases.has(cmd)) {
                    command = bot.commands.get(bot.aliases.get(cmd));
                }

                if (config.commandNotFound == true) {
                    try {
                        command.run(bot, message, args);
                        //RETURN IF COMMAND SHOULD BE HIDDEN FROM COUNT
                        if (command.help.hiddenFromCount == true) return;
                        //TRY TO FIND COMMAND
                        let commandExists = await bot.commandUsages.findOne({
                            where: {
                                "commandName": command.help.name
                            }
                        })

                        if (!commandExists) {
                            //CREATE COMMAND COUNT IN DATABASE
                            await bot.commandUsages.create({
                                "commandName": command.help.name,
                                "usageCount": 1,
                            })
                        } else {
                            //INCREMENT COMMAND USAGE
                            commandExists.increment("usageCount")
                        }
                        addToTotalCommandCount();
                    } catch (err) {
                        if (err) utils.timed_msg(utils.cmd_fail(`Command \`${cmd}\` is not found!`, `${prefix}play <MUSIC/URL>`), 5000);
                    }
                } else {
                    try {
                        command.run(bot, message, args);
                        //RETURN IF COMMAND SHOULD BE HIDDEN FROM COUNT
                        if (command.help.hiddenFromCount == true) return;
                        //TRY TO FIND COMMAND
                        let commandExists = await bot.commandUsages.findOne({
                            where: {
                                "commandName": command.help.name
                            }
                        })

                        if (!commandExists) {
                            //CREATE COMMAND COUNT IN DATABASE
                            await bot.commandUsages.create({
                                "commandName": command.help.name,
                                "usageCount": 1,
                            })
                        } else {
                            //INCREMENT COMMAND USAGE
                            commandExists.increment("usageCount")
                        }
                        addToTotalCommandCount();
                    } catch (err) {
                        if (err) return undefined;
                    }
                }
            }
        });
    }

}