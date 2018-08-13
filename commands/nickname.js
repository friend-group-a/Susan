exports.run = (client, message, args) => {

  let timestamp = require('../console-timestamp');

  let now = new Date();

  message.member.setNickname(args[0]);
  message.channel.send(message.author.toString() + `, Nickname changed to ${args[0]}`);
  console.log("[" + timestamp('MM-DD-YYYY hh:mm:ss:iii') + "] " + message.author.username + `(${message.author.id})` + " has changed their nickname to " + args[0]);

}
