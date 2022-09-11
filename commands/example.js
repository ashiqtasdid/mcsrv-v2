const Discord = require('discord.js');

module.exports = {
    name: 'example',
    description: "this is a example command",
    execute(client, message, args){
        const Help = new Discord.MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle('Example - AT MCSRV Checker')
	    .setURL('https://ashiqthedev.com')
	    .setAuthor('Ashiq Tasdid')
	    .setDescription('Example Commands')
	    .addFields(
	    	{ name: 'Java Premium', value: '!jp play.hypixel.net 25565' },
	    	{ name: 'Java Cracked', value: '!jc play.pixeledgebd.com 25565'},
	    	{ name: 'Bedrock', value: '!bedrock play.pixeledgebd.com 19132' },
            )


        .addField('AT - MCSRV checker', 'Online', true)
        .setTimestamp()
        .setFooter('Ashiq Tasdid');
    
        message.channel.send(Help);
    }
}