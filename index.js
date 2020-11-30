const Discord = require('discord.js');
const bot = new Discord.Client();

const HypixelAPI = require('hypixel-api');

const client = new HypixelAPI('hypixel-token-here');

const token = ('discord-token-here');
const PRE = ('1');

playeron = 0;

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{
    let args = message.content.substring(PRE.length).split(" ");
    switch(args[0]){
        case 'checkonline':
            client.getPlayer('name', args[1]).then((player) => {
                        float = player.player.lastLogin;
                        float2 = player.player.lastLogout;
                        float3 = toLowerCase(player.player.mostRecentGameType);
                        if(float2 < float) {
                            message.channel.send(`player ${args[1]} is online and playing ${float3}!`);
                        } else {
                            message.channel.send(`player ${args[1]} is offline!`);
                        }
                    })
            break;
        }
    })

    setInterval(function() {
        if (playeron == 1) {
            client.getPlayer('name', "playernamehere").then((player) => {
                playerfloat = player.player.lastLogin;
                playerfloat2 = player.player.lastLogout;
                if(playerfloat2 > playerfloat) {
                    bot.channels.cache.get('channel-id-here').send(`playernamehere left :(`);
                    playeron = 0;
                }
            })
        }
        else {
            client.getPlayer('name', "playernamehere").then((player) => {
            playerfloat = player.player.lastLogin;
            playerfloat2 = player.player.lastLogout;
            if(playerfloat2 < playerfloat) {
                bot.channels.cache.get('channel-id-here').send(`hey all, playernamehere just got on hypixel!`);
                playeron = 1;
            }
        })
    }

    
}, 30 * 1000);

    bot.login(token)