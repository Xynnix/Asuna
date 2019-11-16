const utils = require('../global/utils');
const config = require('../settings/config.json');
const fs = require("fs");
const YouTube = require('yt-search');

module.exports.run = async (bot, message, args) => {

    //message.channel.send("music dissabled due to issues with converting youtube vids")
   // return;


    let VC = message.member.voice.channel;
    if(!VC) return message.channel.send("I cant join a voice channel if you arent in one Baka!")

    let url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    let pl = /^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/

    let searchString = args.join(' ');
    if (!url || !searchString) return message.channel.send("I cant search for nothing")

    if(!message.guild.me.permissions.has(["CONNECT" && "SPEAK"])) return message.channel.send("I cant join the channel if i can't connect or speak give me the right perms")

    let queue = bot.queue.get(message.guild.id);

    if (url.match(pl)) {
        /*let playlist = await bot.youtube.getPlaylist(url);
        let videos = await playlist.getVideos();

        for (const vid of Object.values(videos)) {
            let video = await bot.youtube.getVideoByID(vid.id)
            await bot.handleVideo(video, message, VC, true)
        }*/
        message.channel.send("playlist support currently in development")

        //return message.channel.send(`🎵 **${playlist.title}** has been added to queue.`);
    } else {
        try {
            if(url){
                var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	            var match = url.match(regExp);
	            if (match && match[2].length == 11) {
                    YouTube(match[2], function (err, r){
                        let vid = r.videos
                        let video = vid[0]
                        //let video = vid1.url
                        if(err) return
                        else{
                            bot.handleVideo(video, message, VC);
                        }
                    })
                }else{
                    YouTube(searchString, function (err, r){
                        let vid = r.videos
                        let video = vid[0]
                        //let video = vid1.url
                        if(err) return
                        else{
                            bot.handleVideo(video, message, VC);
                        }
                    })}
            }
        } catch (err) {
        console.log(err)
        return message.channel.send("Oopsie whoopsie, I didnt find any music to play for you UwU try something else")
    }
    }
};

module.exports.help = {
    name: 'play',
    aliases: ['join']
};
