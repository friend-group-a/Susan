exports.run = (client, message, args) => {
  const config = require("../config.json");
  const yt = require('ytdl-core');
  const fs = require("fs");
  const discord = require("discord.js");
  const timestamp = require('../console-timestamp');

  let voiceChannel = message.member.voiceChannel;
  let dispatcher;
  let queue = [];
  let playing = false;
  let isLoop = false;


  const commands = {
    'play': (url, dispatcher) => {
      //command to play queue

      if (!playing) {
        playing = true;
        dispatcher = message.guild.voiceConnection.playStream(yt(url, { audioonly: true }));

        queue.shift();

        dispatcher.on('end', () => {
          if(queue.length < 1 && !isLoop) {
            console.log('leave command activated');
            playing = false;
            commands.leave();
          }else if (!isLoop && queue.length > 0) {
            console.log(queue.length);
            console.log('playing next song in queue');
            commands.play(queue[0]);
          }else if (isLoop) {
            console.log('looping current song');
            commands.play(queue[0]);
            message.channel.send('Playing the same song again....');
          }
        });
      }
    },
    'join': () => {
      //command to join voice channel
      try {
        voiceChannel.join();
        message.channel.send(`Joined channel "${voiceChannel.name}"`);
        console.log(`[${timestamp('MM-DD-YYYY hh:mm:ss:iii')}] Susan joined ${voiceChannel.name} with ${message.author.username}(${message.author.toString()})`);
      } catch (err) {
        console.error(err);
        message.channel.send("Failed to join your channel")
      }
    },
    'leave': () => {
      //command to leave voice channel
      try{
        voiceChannel.leave()
        message.channel.send(`Left channel "${voiceChannel.name}"`);
        console.log(`[${timestamp('MM-DD-YYYY hh:mm:ss:iii')}] Susan left ${voiceChannel.name} with ${message.author.username}(${message.author.toString()})`);
      } catch (err) {
        console.error(err);
      }
    },
    'add': (url) => {
      //command to add song to queue
      queue.push(url);
      console.log(queue.forEach((i) => {console.log(i)}));
    },
    'loop': () => {
      if(!isLoop) {
        isLoop = true;
        message.channel.send('Current song is now on loop');
      }else if(isLoop) {
        isLoop = false;
        message.channel.send('Stopped loop');
      };
    },
    'queue': () => {
      embed = new discord.richEmbed
    },
    'stop': (dispatcherr) => {
      dispatcherr.end();
    }
  }


  if(args[0] === 'play') {
    commands.add(args[1]);
    commands.join();
    commands.play(queue[0], dispatcher);
  }else if (args[0] === 'join') {
    commands.join();
  }else if (args[0] === 'leave') {
    commands.leave();
  }else if (args[0] === 'add') {
    commands.add(args[1]);
    message.channel.send(`${songTitle} added to queue`);
  }else if (args[0] === 'loop') {
    commands.loop();
  }else if (args[0] === 'stop') {
    commands.stop(dispatcher);
  };

}
