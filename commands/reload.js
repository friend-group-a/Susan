exports.run = (client, message, args) => {
  try{
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.reply(`The command ${args[0]} has been reloaded`);
  }
  catch(err) {
    message.reply("Must provide a command name to reload.");
    console.error(err);
  }
};
