const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
const fs = require("fs");
const yt = require('ytdl-core');
const timestamp = require('./console-timestamp');

//event handler
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

//command handler
client.on("message", message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.log(`[${timestamp('MM-DD-YYYY hh:mm:ss')}]"${command}" is an invalid command. Attempted by ${message.author.username}`);
    console.error(err);
  }

});

//give new members the "pal" role
client.on("guildMemberAdd", (member) => {
  member.setRoles(['476818672556441612']);
});

client.login(config.token);
