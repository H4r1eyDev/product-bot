const Discord = require('discord.js'); // V12

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
client.config = require("./config.json");

const fs = require('fs');

let prefix = client.config["main_config"].prefix

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.once('ready', () =>{
	console.log(`Bot Online! Logged in as ${client.user.tag}. Using The Prefix ${client.config["main_config"].prefix}`);
	client.user.setActivity(client.config["main_config"].botstatus, { type: client.config["main_config"].presence })
});

client.on('message', message =>{
	if(!message.content.startsWith(client.config["main_config"].prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const cmd = args.shift().toLowerCase();
	const command = client.commands.get(cmd)

	if(command){
        command.execute(message, args, client, Discord);
    } else if (message.content.startsWith(prefix)){
		const commandno = new Discord.MessageEmbed()
		.setAuthor(`Command not Found in Base.`)
		.setColor(client.config["server_config"].embed_colours)
		.setDescription(`Run ${client.config["main_config"].prefix}order {Product} to order a product!`)
		.setFooter(client.config["server_config"].copyright + ` | Made By HarleyDevelopment`, client.config["server_config"].server_icon)
		message.channel.send(commandno)
	}
});

client.login(client.config["main_config"].token);