const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function() {
  bot.user.setGame('*help').catch(console.error)
})

bot.on('message', function(message) {
  if (message.content === '*help' || message.content === '*Help') {
    message.reply('Va regarder tes messages privés. Je t\'ai envoyé une petite surprise :wink:')
    message.author.send(['**Voici ce que je peux faire, moi Caesar**',
    '*zeppeli -> Envoie une image de ma fameuse sauce tomate',
    '*caesar -> Essaye pour voir',
    '*vie -> Damsoooo',
    '*grammarnazi -> Adulation au Grammar Führer',
    '*highfive [User] -> Fait un highfive avec un [user]',
    '*cola -> Pour gagner un cola afin de construire ton bateau One Piece',
    '*muda -> Vous donne le role Muda Muda Muda',
    '*meme -> Envoie un meme'])
    }
})

bot.on('message', function(message) {
  if (message.content === '*zeppeli' || message.content === '*Zeppeli') {
    const embed = new Discord.RichEmbed()
      .setColor(0xFF0000)
      .setImage("https://i.ibb.co/ymTwwJC/zeppeli.png")
      .setFooter("Powered by William Antonio Zeppeli")
      .setTimestamp()
      message.channel.send('ZEPPELIIIIII',{embed})
  }
})

bot.on('message', function(message) {
  if (!message.guild) return;

  if (message.content.startsWith('*caesar') || message.content.startsWith('*Caesar')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
          message.channel.send(`${user.username}, tu as si bon goooooût !`);
      } else {
        message.reply("l'utilisateur n'est pas dans le serveur");
      }
    } else {
      message.reply("tu as si bon goooooût !");
    }
  }
});


bot.on('message', function(message) {
  if (message.content === '*vie' || message.content === '*Vie') {
    const vie = [
    'https://i.ibb.co/zRtxjny/th-2.jpg',
    'https://i.ibb.co/RT0WMh7/870x489-damso.jpg',
    'https://i.ibb.co/WpFJNDP/images-3.jpg',
    'https://i.ibb.co/kmRmtTX/Screenshot-20190302-171530-1.jpg',
    'https://i.ibb.co/C9vwLJr/th-4.jpg',
    'https://i.ibb.co/drM06PD/th-3.jpg']

    const embed = new Discord.RichEmbed()
      .setColor(0x0F0301)
      .setImage(vie[Math.floor(Math.random() * vie.length)])
      .setFooter("Damso")
      .setTimestamp()
      message.channel.send({embed})
  }
})

bot.on('message', function(message) {
  if (message.content.includes('@everyone')) {
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

bot.on('message', function(message) {
  if (message.content === '*meme') {
    const meme = [
      'https://i.ibb.co/Jd7GqFR/1purxpt3a.png',
      'https://i.ibb.co/vYm1cy4/6lf5b4lvq.png',
      'https://i.ibb.co/gyT2YFH/9m1rbgu2j.png',
      'https://i.ibb.co/tDByj6z/9v2bhewsv.png',
      'https://i.ibb.co/qFP9xJV/939ay5dip.png',
      'https://i.ibb.co/C9jdY22/a22ba0mz1.png',
      'https://i.ibb.co/QHJ9hcH/eateblx8n.png',
      'https://i.ibb.co/d4t6LGd/fnlk6tbl0.png',
      'https://i.ibb.co/JvpXrwq/hio7ec6vi.png',
      'https://i.ibb.co/VqqhmMc/rtrk8rd0r.png',
      'https://i.ibb.co/R682HKY/sq9aavwy6.png',
      'https://i.ibb.co/gDYsmq8/t5mqepfkt.png',
      'https://i.ibb.co/X8YcjB8/wvc2qjs98.png',
      'https://i.ibb.co/56rwSQ0/2v0zmh.jpg',
      'https://i.ibb.co/4VQLPJh/2v0zty.jpg']

      const embed = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setImage(meme[Math.floor(Math.random() * meme.length)])
        .setFooter("Loooool")
        .setTimestamp()
        message.channel.send({embed})
  }
})

bot.on('message', function(message) {
  if (message.content === '*cola') {
    const embed = new Discord.RichEmbed()
      .setColor(0xFFFF00)
      .setImage("https://i.ibb.co/QnJrxZZ/16-161897-ps2-pb-dio-render-jojos-bizarre-adventure-dio.jpg")
      .setFooter("Diooooo")
      .setTimestamp()
      message.channel.send("You thought you'd won a cola, but it was me, DIO !",{embed});
  }
})

bot.on('message', function(message) {
  if (!message.guild) return;
    
  if (message.content.startsWith('*highfive')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
          message.reply(`tu fais un highfive avec ${user.username} :raised_hand:`);
      } else {
        message.reply("l'utilisateur n'est pas dans le serveur");
      }
    } else {
      message.reply("tu n'as pas d'ami ?");
    }
  }
});

bot.on('message', function(message) {
  if (message.content === '*nudes' || message.content === '*sendnudes') {
    const nudes = [
      'ESPECE DE PERVERS ! TU DEVRAIS ETRE MORT DE HONTE',
      "Tu t'es pris pour qui a demander des nudes",
      "Reviens me voir quand tu l'auras mérité. JAMAIS !" ]

    message.channel.send('Va voir tes messages privés grand fou :wink:')
    message.author.send(nudes[Math.floor(Math.random() * nudes.length)])
  }
})

bot.on('guildMemberAdd', function(member) {
  member.guild.channels.find("name", "accueil").send(`Bienvenue ${member} parmis nous !`)
})

bot.on('guildMemberRemove', function(member) {
  member.guild.channels.find("name", "accueil").send(`Adieu ${member}.`)
  message.author.send("Revieeeeeeeeeeeeens !")
})

bot.on('message', function(message) {
  if (message.content === '*setup')
  {
    if (message.member.hasPermission('ADMINISTRATOR')){

    message.channel.send("Setup starting ...\n\n")
    message.guild.createRole({
      name: 'Muda Muda Muda',
      color: 0xFFFF00,
    })
    message.channel.send("Setup finished");
    }
    else
    {
      message.reply("Tu n'as pas les droits")
    }
  }
  if (message.content === '*muda') {
    const muda = message.guild.roles.find("name", "Muda Muda Muda");

    message.member.addRole(muda);
    message.author.send('MUDA MUDA MUDA');
  }
})

bot.on('message', function(message) {
  if (message.content === '*rly' || message.content === '*really') {
    const embed = new Discord.RichEmbed()
      .setColor(0x0F0301)
      .setImage("https://i.ibb.co/LkXsDqs/51909353.jpg")
      .setFooter("Really Nigga")
      .setTimestamp()
      message.channel.send({embed});
  }
})

bot.login(process.env.TOKEN)
