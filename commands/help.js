module.exports = {
    name: "help",
    execute(message, args, client, Discord){
        const help = new Discord.MessageEmbed()
        .setAuthor(`Help Command for ${client.user.tag}!`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(client.config["server_config"].embed_colours)
        .addFields(
            {
                name: "**``commission``**",
                value: "Allows a user to check if the commissions are open!",
                inline: true
            },
            {
                name: "**``completed``**",
                value: "Displays a order as completed!",
                inline: true
            },
            {
                name: "**``help``**",
                value: "Shows the current display",
                inline: true
            },
            {
                name: "**``in-progress``**",
                value: "Displays a order as in progress",
                inline: true
            },
            {
                name: "**``order``**",
                value: 'Allows anyone to make a order.',
                inline: true
            },
            {
                name: "**``Ping``**",
                value: 'Responds with a simple message.',
                inline: true
            },
            {
                name: "**`products`**",
                value: 'Displays all of the products.'
            }
        )
        .setFooter(client.config["server_config"].copyright + ` | Made By HarleyDevelopment`, client.config["server_config"].server_icon)
        message.channel.send(help)
    }
}