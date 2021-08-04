module.exports = {
    name: "products",
    execute(message, args, client, Discord){


        const i = client.config["server_config"].server_icon

        const prod = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} Here you can view ${client.config["server_config"].server_name}'s Products`)
        .setColor(client.config["server_config"].embed_colour)
        .setThumbnail(i)
        .setDescription(client.config["server_config"].products_for_sale)
        .setFooter(client.config["server_config"].copyright + ` | Made By HarleyDevelopment`, i)
        message.channel.send(prod)
        message.delete().catch(O_o=>{});
    }
}