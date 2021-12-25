const Discord = require('discord.js');
const db = require('quick.db');
 

 
module.exports.run = async (client, message, args) => { //by F4OURS7VEN.js
 

    let cargo_masculino_config = db.get(`registro_masculino_${message.guild.id}`);
    let cargo_feminino_config = db.get(`registro_feminino_${message.guild.id}`);
    let cargo_naobinario_config = db.get(`registro_naobinario_${message.guild.id}`);
    let cargo_mais18_config = db.get(`registro_mais18_${message.guild.id}`);
    let cargo_menos18_config = db.get(`registro_menos18_${message.guild.id}`);
    let cargo_hetero_config = db.get(`registro_hetero_${message.guild.id}`);
    let cargo_lgbt_config = db.get(`registro_lgbt_${message.guild.id}`);
    let cargo_equiperegistro_config = db.get(`registro_equipe_${message.guild.id}`);
    let cargo_naoregistrado_config = db.get(`registro_naoregistrado_${message.guild.id}`);
    let cargo_registrado_config = db.get(`registro_registrado_${message.guild.id}`);
    let cargo_logschannel_config = db.get(`registro_logs_${message.guild.id}`);

if(cargo_equiperegistro_config === null) return message.reply(`O Sistema de registro não foi configurado da \`!config\` ⚠️`);

  let registro = {
    equiperegistro: cargo_equiperegistro_config,
    naoregistrado: cargo_naoregistrado_config,
    registrado: cargo_registrado_config,
    logschannel: cargo_logschannel_config,
    masculino: cargo_masculino_config,
    feminino: cargo_feminino_config,
    naobinario: cargo_naobinario_config,
    mais18: cargo_mais18_config,
    menos18: cargo_menos18_config,
    hetero: cargo_hetero_config,
    lgbt: cargo_lgbt_config,
  };
 
  let page = 1;
  let pages = new Array();
 
  if (!message.member.roles.cache.has(registro.equiperegistro)) return message.channel.send(`:x: | ${message.author} Você não é da equipe de registro!`);
  message.delete();
  let cargos = [];
  let pv = [];
  let masculino = message.guild.roles.cache.get(registro.masculino)
  let feminino = message.guild.roles.cache.get(registro.feminino)
  let naobinario = message.guild.roles.cache.get(registro.naobinario)
  let menos18 = message.guild.roles.cache.get(registro.menos18)
  let mais18 = message.guild.roles.cache.get(registro.mais18)
  let hetero = message.guild.roles.cache.get(registro.hetero)
  let lgbt = message.guild.roles.cache.get(registro.lgbt)
  let userReg = message.mentions.users.first();
  let member = message.guild.member(userReg);
  if (!userReg) return message.channel.send(`:x: | ${message.author} Mencione um usuário para registrar!`);
 //ferinha
  pages.push({
    description: `**👤 Registrado:** ${userReg}\n**📑 Registrador:** ${message.author}\n\n` +
      `**Qual sua sexualidade?**\n1️⃣ ${masculino}\n2️⃣ ${feminino}\n3️⃣ ${naobinario}\n\n`,
    cargos: [
      masculino,
      feminino,
      naobinario
    ]
  });
  pages.push({
    description: `**👤 Registrado:** ${userReg}\n**📑 Registrador:** ${message.author}\n\n` +
      `**Qual sua idade?**\n1️⃣ ${menos18}\n2️⃣ ${mais18}\n\n`,
    cargos: [
      menos18,
      mais18
    ]
  });
  pages.push({
    description: `**👤 Registrado:** ${userReg}\n**📑 Registrador:** ${message.author}\n\n` +
      `**Qual o seu gênero?**\n1️⃣ ${hetero}\n2️⃣ ${lgbt}\n\n`,
    cargos: [
      hetero,
      lgbt
    ]
  });
  
  const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
     .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(pages[page - 1].description)
    .setFooter('Reaja de acordo com o cargo que você deseja');
 
  const embedUser = new Discord.MessageEmbed()
    .setTitle(` ${member.user.username} foi registrado(a)!`)
    .setColor('BLUE')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`**📑 Registrador:** ${message.author}\n**👤 Registrado:** ${userReg}\n\n`+
      `**🗂 Cargos recebidos:** ${pv!==''?'nenhum.':pv.join(', ')}`)
    .setFooter(`📁 ID Registrado: ${userReg.id}`)
    .setTimestamp();
 
  const embedFinish = new Discord.MessageEmbed()
    .setTitle('📋 Registro Efetuado!')
    .setDescription(`**👤 Registrador:** ${message.author}\n**📑 Registrado:** ${userReg}\n\n` +
      `**🗂 Cargos recebidos:** @${pv!==''?'nenhum.':pv.join(', ')}`)
    .setColor('BLUE')
    .setThumbnail(userReg.displayAvatarURL())
    .setFooter('📁 Registros | ' + message.guild.name)

  message.channel.send(embed).then(msg =>
    msg.react('1️⃣').then(r => {
      msg.react('2️⃣');
      msg.react('3️⃣');
      msg.react('➡');
 
      const oneFilter = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === message.author.id;
      const twoFilter = (reaction, user) => reaction.emoji.name === '2️⃣' && user.id === message.author.id;
      const threeFilter = (reaction, user) => reaction.emoji.name === '3️⃣' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
 
      const one = msg.createReactionCollector(oneFilter, { time: 60000 });
      const two = msg.createReactionCollector(twoFilter, { time: 60000 });
      const three = msg.createReactionCollector(threeFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });
 //ferinha//ferinha kkkjkjkj sla :>
      one.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[0]);
        cargos.push(pages[page - 1].cargos[0]);
        pv.push(pages[page - 1].cargos[0].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**📑 Registrador:** ${message.author}\n**👤 Registrado:** ${userReg}\n\n` +
            `**🗂 Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**📑 Registrador:** ${message.author}\n**👤 Registrado:** ${userReg}\n\n` +
            `**🗂 Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          client.channels.cache.get(registro.logschannel).send(embedFinish);
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      two.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[1]);
        cargos.push(pages[page - 1].cargos[1]);
        pv.push(pages[page - 1].cargos[1].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**📑 Registrador:** ${message.author}\n**👤 Registrado:** ${userReg}\n\n` +
            `**🗂 Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          client.channels.cache.get(registro.logschannel).send(embedFinish);
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**🗂 Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      three.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[2]);
        cargos.push(pages[page - 1].cargos[2]);
        pv.push(pages[page - 1].cargos[2].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**📑 Registrador:** ${message.author}\n**👤 Registrado:** ${userReg}\n\n` +
            `**🗂 Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**📑 Registrador:** ${message.author}\n**👤 Registrado:** ${userReg}\n\n` +
            `**🗂 Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          client.channels.cache.get(registro.logschannel).send(embedFinish);
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**🗂 Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      forwards.on('collect', async (r, user) => {
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**Registrador:** ${message.author}\n**Registrado:** ${userReg}\n\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish);
          embedUser.setDescription(`**📑 Registrador:** ${message.author}\n**👤 Registrado:** ${userReg}\n\n` +
            `**🗂 Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          client.channels.cache.get(registro.logschannel).send(embedFinish);
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**🗂 Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
    })
  );
 
    }