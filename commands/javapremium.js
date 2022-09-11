const util = require('minecraft-server-util');
const version = require('./version');

module.exports = {
    name: 'jp',
    description: 'get information about a minecraft server',
    execute(client, message, args, Discord) {
        if (!args[0]) return message.channel.send('Please enter a minecraft server ip adress');
        if (!args[1]) return message.channel.send('Please enter a minecraft server port [Default: 25565]');

        util.status(args[0], parseInt(args[1])).then((response) => {
            console.log(response);
            const embed = new Discord.MessageEmbed()
                .setThumbnail('attachment://favicon.png')
                .setColor('#BFCDEB')
                .setTitle('Mc server status')
                .addFields(
                    { name: 'Players Online', value: response.players.online },
                    { name: 'Max Player Cap', value: response.players.max },
                    { name: 'Server Version', value: response.version.name },
                    { name: 'MOTD', value: response.motd.clean},
                    { name: 'Ping', value: response.roundTripLatency }
                )
                .setFooter('MC Server Checker By Ashiq Tasdid - Ashiq The DEV');

            message.channel.send({
                files: [
                    {
                        attachment: Buffer.from(response.favicon.split(',')[1], 'base64'),
                        name: 'favicon.png'
                    }
                ],
                embed
            });
        })
            .catch((error) => {
                message.channel.send('there was an error finding this server');
                console.log(error)
            })
    }
}