const fs = require('fs');
const discord = require("discord.js");
module.exports = (bot, utils, ytdl, config) => {

    fs.readdir("./commands/", (err, files) => {

        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");

        if (jsfiles.length <= 0) return console.log("There are no commands to load...");

        console.log(`Loading ${jsfiles.length} commands...`);
        jsfiles.forEach((f, i) => {
            let props = require(`../commands/${f}`);
            console.log(`${i + 1}: ${f} loaded!`);
            bot.commands.set(props.help.name, props);
            props.help.aliases.forEach(alias => {
                bot.aliases.set(alias, props.help.name);
            });
        });
    });

    bot.loadCommand = (commandName) => {
        try {
            let props = require(`../commands/${commandName}`);
            if (props.init) props.init(bot);
            bot.commands.set(commandName, props);
            props.help.aliases.forEach(alias => {
                bot.aliases.set(alias, props.help.name);
            });
            return false;
        } catch (err) {
            return utils.cmd_fail(`Error: ${err}\nCommand \`${commandName}\` cannot be found.`, `${config.prefix}reload <command>`);
        }
    };

    bot.unloadCommand = async (commandName) => {
        try {
            if (!commandName) return `The command \`${commandName}\` doesn"t seem to exist. Try again!`;

            if (commandName.shutdown) await commandName.shutdown(bot);
            delete require.cache[require.resolve(`../commands/${commandName}.js`)];
            return false;
        } catch (err) {
            return utils.cmd_fail(`Error: ${err}\nCommand \`${commandName}\` cannot be found.`, `${config.prefix}reload <command>`);
        }
    };

    bot.handleVideo = async (video, message, vc, playlist = false) => {
        let queue = bot.queue.get(message.guild.id);
        let music = {
            id: video.id,
            title: video.title,
            //url: `https://www.youtube.com/watch?v=${video.id}`
            url: `https://www.youtube.com${video.url}`
        };

        if (!queue) {
            let queueConstruct = {
                textChannel: message.channel,
                voiceChannel: vc,
                connection: null,
                musics: [],
                volume: 50,
                playing: true
            };
            let voteConstruct = {
                votes: 0,
                voters: []
            };

            bot.queue.set(message.guild.id, queueConstruct);
            bot.votes.set(message.guild.id, voteConstruct)
            queueConstruct.musics.push(music);

            try {
                var connection = await vc.join();
                queueConstruct.connection = connection;
                bot.play(message.guild, queueConstruct.musics[0]);
            } catch (err) {
                bot.queue.delete(message.guild.id);
                console.error(`I could not join your voice channel: ${err}`);
            }
        } else {
            queue.musics.push(music);
            let MusicAdded = new discord.MessageEmbed()
            .setDescription(`🎵 [${music.title}](${music.url}) has been added to the queue 🎵`)
            if (playlist) return;
            else return message.channel.send(MusicAdded);
        }
        return;
    }

    bot.play = (guild, music) => {
        let queue = bot.queue.get(guild.id);
        let votes = bot.votes.get(guild.id)
        if (!music) {
            queue.voiceChannel.leave();
            bot.queue.delete(guild.id);
            bot.votes.delete(guild.id);
            var endembed = new discord.MessageEmbed()
            .setDescription("🎵 Music playback has ended")
            .addField("See you next time", "if you liked the bot please [vote](https://discordbots.org/bot/420907324945989632/vote)")

            return queue.textChannel.send(endembed);
        }

          let dispatcher = queue.connection.play(ytdl(music.url, {highWatermark: 40, filter: "audioonly"}), { bitrate: "auto", passes: 4 })
            .on('end', () => {
                queue.musics.shift();
                votes.votes = 0;
                votes.voters = [];
                setTimeout(() => {
                    bot.play(guild, queue.musics[0]);
                }, 250);
            })
            .on('error', err => console.error(err));
        dispatcher.setVolumeLogarithmic(queue.volume / 100);
          //  let PlayingNew = new 
        queue.textChannel.send(`🎵 **${music.title}** is now being played`);
    }

}
