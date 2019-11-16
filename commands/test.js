const Discord = require('discord.js');
const fetch = require("node-fetch")

module.exports.run = async (client,message,args) => {
	fetch('http://aws.random.cat//meow')
    .then(res => res.json())
    .then(json => console.log(json.file));
}

module.exports.help = {
	name: "test",
	aliases: []
}
