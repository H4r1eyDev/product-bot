module.exports = {
    name: "order",
    execute(message, args, client, Discord){

        if(message.channel.id == client.config["order_config"].order_channel_id){
        const t = args.join(" ");
        if(!t) return message.channel.send("You must declare what you would like to order!");
        const i = client.config["server_config"].server_icon;


        const order = new Discord.MessageEmbed()
        .setAuthor(`Order Sent! ✅`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(client.config["server_config"].embed_colour)
        .setTimestamp()
        .setDescription(`Order Information: \n
        You are ordering: ${t}`)
        .setFooter(client.config["server_config"].copyright + ` | Made By HarleyDevelopment`, i)
        message.channel.send(order).then(msg => {
            msg.delete({ timeout: 5000 })
        })
        message.delete().catch(O_o=>{});
        }else{
            message.channel.send(`This is not the set order channel! Please Try again in <#${client.config["order_config"].order_channel_id}>`)
        }

        const guild = client.guilds.cache.get(client.config["server_config"].guild_id);
        const channel = guild.channels.cache.get(client.config["order_config"].order_response_channel)
        const order2 = new Discord.MessageEmbed()
        .setAuthor("⚠️ NEW ORDER ⚠️", message.author.displayAvatarURL({ dynamic: true }))
        .setColor(client.config["server_config"].embed_colours)
        .setThumbnail(client.config["server_config"].server_icon)
        .setTimestamp()
        .setDescription(`**Order Information** \n
        **Buyer:**\n
        *${message.author.tag} // ${message.author.id} // <@${message.author.id}>*
        \n
        **Item:**\n
        *${args.join(" ")}*`)
        .setFooter(client.config["server_config"].copyright + ` | Made By HarleyDevelopment`, client.config["server_config"].server_icon)
        channel.send(order2)
    }
}