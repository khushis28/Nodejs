// index.js
require('dotenv').config(); // Load .env

const { Client, Events, GatewayIntentBits } = require("discord.js");

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
});

client.on('messageCreate', (message) => {
    if(message.author.bot) return;

    if(message.content.startsWith('create')){
        const url = message.content.split('create')[1].trim();
        return message.reply({
            content: 'Generating Short ID for ' + url,
        });
    }

    message.reply({
        content: "Hi from Bot",
    });
});

client.on('interactionCreate', (interaction) => {
    console.log(interaction);
    interaction.reply('Pong!!');
});

// Use token from .env
client.login(process.env.DISCORD_TOKEN);