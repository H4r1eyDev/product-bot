module.exports = {
    name: "completed",
    execute(message, args, client, Discord){
        if(message.member.roles.cache.has(client.config["command_centre"].allowed_to_complete)){
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send("Error, Format: ```completed {user_id} {Message to buyer}```")
        const inprogress = new Discord.MessageEmbed()
        .setAuthor(`Completed Information Sent to ${user.user.username} ✅`, user.user.displayAvatarURL({ dynamic: true }))
        .setColor(client.config["server_config"].embed_colours)
        .setFooter(client.config["server_config"].copyright + ` | Made By HarleyDevelopment`, client.config["server_config"].server_icon)
        message.channel.send(inprogress)

        if(client.config["command_centre"].in_progress_channel_notifications == 'true'){
        const guild = client.guilds.cache.get(client.config["server_config"].guild_id);
        const channel = guild.channels.cache.get(client.config["command_centre"].progress_update_channel)
        const notify = new Discord.MessageEmbed()
        .setAuthor(`${user.user.username} You're Order is now **Completed**! ✅`, user.user.displayAvatarURL({ dynamic: true }))
        .setColor(client.config["server_config"].embed_colours)
        .setTimestamp()
        .setDescription(`<@${user.user.id}> You're Order is now Completed!`)
        .setThumbnail(client.config["server_config"].server_icon)
        .setFooter(client.config["server_config"].copyright + ` | Made By HarleyDevelopment`, client.config["server_config"].server_icon)
        channel.send(notify)
        } // channel notifications 

        if(client.config["command_centre"].in_progress_dm_notifications == 'true'){
        const dm = new Discord.MessageEmbed()
        .setAuthor(`Well Done, You're Order is Completed!`, user.user.displayAvatarURL({ dynamic: true }))
        .setColor(client.config["server_config"].embed_colours)
        .setThumbnail(client.config["server_config"].server_icon)
        .setDescription(`Hello **<@${user.user.id}> (${user.user.id})** I am **${message.author.username}** *(No Reply)*. I am here to inform you that you're order has now been **Completed**! \n
        **Message From Seller (${message.author.username}):** ${args.splice(1).join(' ')}`)
        .setFooter(client.config["server_config"].copyright + ` | Made By HarleyDevelopment`, client.config["server_config"].server_icon)
        user.user.send(dm)


        } // dm notifications
    }else{
        message.channel.send("No Permissions")
    }
    } // standard operating
} // standard operating