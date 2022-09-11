const website = 'https://ashiqthedev.com'
const Discord = require('discord.js')

module.exports = {
    name: 'author',
    description: "this is a author command",
    execute(client, message, args){
        message.channel.send('Md. Ashiquzzaman Khan - CEO, Ashiq The Dev');
    }
}