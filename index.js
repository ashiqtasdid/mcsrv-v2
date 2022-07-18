const Discord = require('discord.js');
const util = require('minecraft-server-util');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const TOKEN = process.env.CLIENT_TOKEN

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler','events_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})


client.login(TOKEN);