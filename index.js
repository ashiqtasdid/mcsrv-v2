const Discord = require('discord.js');
const util = require('minecraft-server-util');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler','events_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})


client.login(process.env.token);