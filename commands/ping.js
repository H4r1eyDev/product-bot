module.exports = {
    name: "ping",
    execute(message, args, client, Discord){
        message.channel.send("Ping, I am working!")
        message.delete().catch(O_o=>{});
    }
}