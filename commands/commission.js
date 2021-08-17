module.exports = {
    name: "commission",
    execute(message, args, client, Discord){
        if(client.config["command_centre"].commission_status == 'open'){
        const status = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} Commissions Status: OPEN`)
        .setColor(client.config["server_config"].embed_colours)
        .setThumbnail(client.config["server_config"].server_icon)
        .setDescription(`${message.author.username} Commissions are OPEN, run ${client.config["main_config"].prefix}order {commission} to get the process started!`)
        .setFooter(client.config["server_config"].copyright + ` | Made By HarleyDevelopment`, client.config["server_config"].server_icon)
        message.channel.send(status)
        }else{
            const status2 = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}, Commissions Status: CLOSED`)
            .setColor(client.config["server_config"].embed_colours)
            .setThumbnail(client.config["server_config"].server_icon)
            .setDescription(`${message.author.username} Commissions are CLOSED`)
            .setFooter(client.config["server_config"].copyright + ` | Made By HarleyDevelopment`, client.config["server_config"].server_icon)
            message.channel.send(status2)
        } // commission opened ending.
    }
}