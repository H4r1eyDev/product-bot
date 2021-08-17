module.exports = {
    name: "credits",
    execute(message, args, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.tag}'s Original Developers`)
        .setColor(client.config["server_config"].embed_colours)
        .setDescription(`[@H4r1eyDev](https://discord.gg/ksv9GaZJ74) - Main Programmer\n[@Hyperz](https://hyperz.dev/discord) - Optimization and Github Clean Up`)
        .setFooter(client.config["server_config"].copyright + ` | Made By HarleyDev`, client.config["server_config"].server_icon)
        message.channel.send(embed)
        message.delete()
    }
}
