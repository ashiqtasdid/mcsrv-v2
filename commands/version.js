const version = '2.0.1'
const website = 'https://ashiqthedev.com'

module.exports = {
    name: 'version',
    description: "this is a ping command",
    execute(client, message, args){
             
        message.channel.send('The Version is ' + version);
    }
}