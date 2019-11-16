const config = require("../settings/config.json")
const fetch = require("node-fetch")

module.exports = {
    leave: (bot) => {
        bot.on("guildDelete" ,guild => {
let temp = bot.users.fetch(guild.ownerID);        
const body = {
            "username": "Asuna Logs",
            "avatar_url": "https://cdn.discordapp.com/attachments/422469871343894540/605846303619940362/asuna.png",
            "embeds": [
              {
                "title": "Asuna Logs",
                "description": "Left a server",
                "color": 16711680 ,
                "fields": [
                  {
                    "name": "name",
                    "value": guild.name,
                    "inline": true
                  },
                  {
                    "name": "guild id",
                    "value": guild.id,
                    "inline": true
                  },
                  {
                    "name": "membercount",
                    "value": guild.members.size,
                    "inline": true
                  },
                  {
                    "name": "owner",
                    "value": guild.owner.user.tag,
                    "inline": true
                  },
                  {
                    "name": "owner id",
                    "value": guild.owner.id,
                    "inline": true
                  }
                ],
                "thumbnail": {
                  "url": guild.iconURL()
                },
                "footer": {
                  "text": `new server count ${bot.guilds.size} new member count ${(bot.guilds.reduce((a,b) => a + b.memberCount,0)).toLocaleString()}`
                }
              }
            ]
          }
        
              fetch("webhook link",{
                  method: "post",
                  body: JSON.stringify(body),
                  headers: { 'Content-Type': 'application/json' },
              }) 

            })
            
}}
