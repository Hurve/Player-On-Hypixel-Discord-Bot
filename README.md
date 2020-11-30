# Player-On-Hypixel-Discord-Bot.
A Discord Bot that uses the Hypixel API to send messages when a player gets on the Hypixel server.

This Bot using Discord.js can notify a discord text channel whenever someone joins or leaves the Hypixel Server.

# How to set up for your server
To set up, first you need to create an application in Discords development portal and get the token. Then, paste the token in the bots code where it says `discord-token-here`. Next, go on hypixel and do /api new to get the api key and paste it into where it says `hypixel-token-here`. Then, replace `playernamehere` on line 37 and 47 with the player you want to see go online and offline, and change the messages the bot says to match the player you set. Also change `channel-id-here` on line 41 and 51 to the channel id of the channel you want the messages to be sent in. Then start the bot and it should work now!

Make sure you have the Discord.js and hypixel API packages installed for this to work!

