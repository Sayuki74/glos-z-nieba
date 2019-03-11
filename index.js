const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTU0MTg4MDQ4MTk2MTczODI1.D2ci3g.PvbMN2tfzdawTDopvUxSwhaDttw'

bot.on('message', function(message){
    if(message.content == '!chodakowska')
    {
        message.reply('https://www.youtube.com/watch?v=ISzEqgFekDE');
    }
});

bot.on('message', function(message){
    if(message.content == '!ćwiczenia')
    {
        message.reply('https://www.youtube.com/watch?v=ISzEqgFekDE');
    }
});

bot.login(TOKEN);
