const Discord = require('discord.js');

module.exports = {
    name: 'example',
    description: "this is a example command",
    execute(client, message, args){
        const Help = new Discord.MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle('Example - AT MCSRV Checker')
	    .setURL('https://ashiqthedev.ml')
	    .setAuthor('Ashiq Tasdid')
	    .setDescription('Read this for getting help')
	    .addFields(
	    	{ name: 'Example', value: '!mcsrv play.hypixel.ney 25565' })


        .addField('AT - MCSRV checker', 'Online', true)
        .setTimestamp()
        .setFooter('Ashiq Tasdid');
    
        message.channel.send(Help);
    }
}