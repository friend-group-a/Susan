exports.run = (client, message, args) => {
  try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${console.error}\n\`\`\``);
    }
  }
