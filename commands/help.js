const Discord = require("discord.js");

module.exports = {
    name: "help com reação by ferinha",
    description: "clique na reação, e a msg será editada :)",
    author: "ferinha heher",

run: async(client, message, args) => { //embed do painel inicial
    let embed = new Discord.MessageEmbed()
    .setTitle(`Painel de comandos`)
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`Veja meus comandos:

\n ✍️ Registro\n ✌️ Ultilidade \n 🗃️ Config \n📄 Informações
⠀`)
    .setFooter(`${message.author.tag}`)
    .setColor("YELLOW")    
    message.channel.send(`${message.author}`, embed).then(msg => {
      msg.react("✍️")
      msg.react("✌️")
      msg.react("🗃️")
      msg.react("📄")
      msg.react("🔨")


      let filtro0 = (r, u) => r.emoji.name === '✍️ && u.id === message.author.id;
      let filtro1 = (r, u) => r.emoji.name === '✌️' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.name === '🗃️' && u.id === message.author.id;
      let filtro3 = (r, u) => r.emoji.name === '📄' && u.id === message.author.id;
     let filtro4 = (r, u) => r.emoji.name === '🔨' && u.id === message.author.id;

      

      let coletor0 = msg.createReactionCollector(filtro0);
      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);
      let coletor3 = msg.createReactionCollector(filtro3);
      let coletor4 = msg.createReactionCollector(filtro3);



      coletor0.on("collect", c => { //embed do painel inicial (editada)

        let ferinha = new Discord.MessageEmbed()
      .setTitle(`Painel de comandos`)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`Veja meus comandos:

\n ✍️ Registro\n ✌️ Ultilidade \n 🗃️ Config \n📄 Informações\n 🔨 Moderação
⠀`)
      .setFooter(`${message.author.tag}`)
      .setColor("YELLOW")   
        
     
        msg.edit(`${message.author}`, ferinha)
      })


      coletor.on("collect", c => { //embed do painel de utilidade (editada)

        let fera = new Discord.MessageEmbed()
        .setTitle(`✌️ Utilidade ✌️`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`**tdk!say,tdk!avatar,tdk!chat,tdk!eval,tdk!slowmode,
tdk!tweet**
        .setColor("GREEN")
        

        msg.edit(`${message.author}`, fera)
      })

      coletor2.on("collect", c => { //embed do painel de moderação (editada)

        let fera = new Discord.MessageEmbed()
        .setTitle(`🔨 Moderação 🔨`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`**tdk!ban,tdk! addfamily,tdk!remfamily,tdk!addvip,tdk!remvip,tdk!addemoji,tdk!limpar,tdk!mute,tdk!unmute,tdk!role,tdk!roleall**`)
        .setColor("GREEN")
        

        msg.edit(`${message.author}`, fera)
      })

      coletor3.on("collect", c => { //embed do painel de diversão (editada)

        let ferinha = new Discord.MessageEmbed()
        .setTitle(`✍️ Registro ✍️`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(``)
        .setColor("GREEN")

        msg.edit(`${message.author}`, ferinha)
      })

      coletor4.on("collect", c => { //embed de outros cmds (editada)

        let ferauwu = new Discord.MessageEmbed()
        .setTitle(`🗃️ Outros 🗃️`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`**tdk!config**`)
        .setColor("BLUE")

        msg.edit(`${message.author}`, ferauwu)
      })
    })
  }
}//by ferinha <3