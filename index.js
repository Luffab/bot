const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function() {
  bot.user.setGame('En cours de dev').catch(console.error)
})

bot.on('message', function(message) {
  if (message.content === '*help' || message.content === '*Help') {
    message.reply('Va regarder tes messages privés. Je t\'ai envoyé une petite surprise :wink:')
    message.author.send(['**Voici ce que je peux faire, moi Caesar**',
    '*zeppeli -> Envoie une image de ma fameuse sauce tomate',
    '*caesar -> Essaye pour voir',
    '*vie -> Damsoooo',
    '@everyone -> N\'essaye même pas',
    '*grammarnazi -> Adulation au Grammar Führer'])
    }
})

bot.on('message', function(message) {
  if (message.content === '*zeppeli' || message.content === '*Zeppeli') {
    const embed = new Discord.RichEmbed()
      .setColor(0xFF0000)
      .setImage("https://i.ibb.co/ymTwwJC/zeppeli.png")
      .setFooter("Powered by William Antonio Zeppeli")
      .setTimestamp()
      message.channel.send({embed})
  }
})

bot.on('message', function(message) {
  if (message.content === '*Caesar' || message.content === '*caesar') {
    message.reply('Tu as si bon gooooooût')
  }
})

bot.on('message', function(message) {
  if (message.content === '*vie' || message.content === '*Vie') {
    const vie = [
    'https://i.ibb.co/zRtxjny/th-2.jpg',
    'https://i.ibb.co/RT0WMh7/870x489-damso.jpg',
    'https://i.ibb.co/WpFJNDP/images-3.jpg' ]
    const embed = new Discord.RichEmbed()
      .setColor(0x0F0301)
      .setImage(vie[Math.floor(Math.random() * vie.length)])
      .setFooter("Damso")
      .setTimestamp()
      message.channel.send({embed})
  }
})

bot.on('message', function(message) {
  if (message.content === '@everyone') {
    message.author.send('EYH OH ! Moi aussi je vais te tag en mp. Tu te prends pour qui ?')
  }
})

bot.on('message', function(message) {
  if (message.content === "*gn" || message.content === "*Grammarnazi" || message.content === "*grammarnazi" || message.content === "*Gn") {
    const embed = new Discord.RichEmbed()
      .setColor(0xFF0000)
      .setImage("https://cdn.discordapp.com/emojis/485212629929820160.png?v=1")
      .setFooter("Grammar Nazi")
      .setTimestamp()
      message.channel.send('HEIL YADA',{embed})
  }
})

bot.login('NTUxMDMzNDg3ODE4NDg5ODU2.D1rGeg.26oDKYCzhpsxSahdYm7WHODbZHE')
