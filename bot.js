const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.login('MTA3MDg2MTkwODEyMDQ1NzI5OA.Gy8TZh.s-MHVoeGDiMuuP8r_L87nXKtzZEERIueZutk88');

// Create a ReadableStream of s16le PCM audio
const audio = connection.receiver.createStream(user, { mode: 'pcm' });
audio.pipe(fs.createWriteStream('user_audio'));