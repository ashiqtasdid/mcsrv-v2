const version = '1.0.2'

module.exports = {
    name: 'version',
    description: "this is a ping command",
    execute(client, message, args){
        message.channel.send('The Version is ' + version);
    }
}