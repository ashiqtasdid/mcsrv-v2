const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(client, message, args){

    const Help = new Discord.MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle('Help - AT MCSRV Checker')
	    .setURL('https://ashiqthedev.com')
	    .setAuthor('Ashiq Tasdid')
	    .setDescription('')
	    .addFields(
	    	{ name: '!help', value: 'For Help command' },
	    	{ name: '!jp', value: '!mcsrv [IP Adress] [Port]. [For Premium Java Servers]', inline: true },
	    	{ name: '!jc', value: '!mcsrv [IP Adress] [Port]. [For Cracked Java Servers]', inline: true },
	    	{ name: '!bedrock', value: '!mcsrv [IP Adress] [Port]. [For Bedrock Servers]', inline: true },
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