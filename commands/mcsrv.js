const util = require('minecraft-server-util');

module.exports = {
    name: 'mcsrv',
    description: 'get information about a minecraft server',
    execute(client, message, args, Discord){
        if(!args[0]) return message.channel.send('Please enter a minecraft server ip adress');
        if(!args[1]) return message.channel.send('Please enter a minecraft server port');

        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
            console.log(response);
            const embed = new Discord.MessageEmbed()
            .setColor('#BFCDEB')
            .setTitle('Mc server status')
            .addFields(
                {name: 'Server Address', value: response.host},
                {name: 'Players Online', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Server Version', value: response.version}
            )
            .setFooter('MC Server Checker By Ashiq Tasdid - Ashiq The DEV');

            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('there was an error finding this server');
            throw error;
        })
    }
}