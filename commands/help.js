const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(client, message, args){

    const Help = new Discord.MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle('Help - AT MCSRV Checker')
	    .setURL('https://ashiqthedev.ml')
	    .setAuthor('Ashiq Tasdid')
	    .setDescription('Read this for getting help')
	    .addFields(
	    	{ name: '!help', value: 'For Help command' },
	    	{ name: '!mcsrv', value: '!mcsrv [IP Adress] [Port]', inline: true },
	    	{ name: '!example', value: 'For example command', inline: true },
            { name: '!author', value: 'Author', inline: true },
            { name: '!version', value: 'Version', inline: true },
	    )
	    .addField('AT - MCSRV checker', 'Online', true)
	    .setTimestamp()
	    .setFooter('Ashiq Tasdid');

    message.channel.send(Help);

    }
}