const { MessageEmbed } = require("discord.js");
const c = require("../config.json");

module.exports.run = async (client, message, args, database) => {
  if (!message.member.hasPermission("MUTE_MEMBERS")) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Você não possui permissões suficientes. (Mutar Membros)`
      )
    return message.reply(embed);
  }

  message.delete()

  let usuario =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);

  if (!usuario) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(`_**Como usar:**_\n⚙ Uso: **${c.prefix}mute <usuário> <motivo>**.`)
    return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
  }
  if (usuario.id == usuario.user.bot.id) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Você não pode mutar um bot.`
      )
    return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
  }
  if (usuario.id == message.member.user.id) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Você não pode mutar-se.`
      )
    return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
  }

  let motivo = args.slice(1).join(" ");
  if (!motivo) motivo = "Motivo não informado.";

  let cargoMutado = message.guild.roles.cache.get("911642552262881382");

  database
    .ref(`Baladinha/Usuários/${usuario.id}`)
    .once("value")
    .then(async function(snap) {
      if (snap.val() == null) {
        database.ref(`Baladinha/Usuários/${usuario.id}`).set({
          User: usuario.id,
          Level: 1,
          Xp: 0,
          Warns: 0,
          Mutado: 1
        });

        usuario.roles.add(cargoMutado).catch(O_o => {});

        const sucess = new MessageEmbed()
        .setDescription(`🥊 **${usuario.user.tag}** foi **punido** com sucesso por: **${message.member.user.tag}**.`)
          .setColor(c.cor)
        message.reply(sucess).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))

        const cpunição = new MessageEmbed()
          .setColor(c.cor)
          .setDescription(`🥊 Usuário **Mutado**.
          
_**Informações:**_
🥋 Usuário: **${usuario.user.tag}**
🦺 Moderador: **${message.member.user.tag}**

_**Sobre:**_
🎈 Motivo: **${motivo}**`)
          .setThumbnail(usuario.user.displayAvatarURL())
          .setAuthor(message.guild.name, message.guild.iconURL())
          .setFooter(message.member.user.tag)
          .setTimestamp()
        message.guild.channels.cache.get("749430358197403749").send(cpunição);

        const dm = new MessageEmbed()
          .setDescription(`🥊 Usuário **Mutado**.
          
_**Informações:**_
🥋 Usuário: **${usuario.user.tag}**
🦺 Moderador: **${message.member.user.tag}**

_**Sobre:**_
🎈 Motivo: **${motivo}**`)
          .setColor(c.cor)
          .setAuthor(message.guild.name, message.guild.iconURL())
          .setFooter(message.member.user.tag)
          .setTimestamp()
        usuario.send(dm).catch(O_o => {})
      } else {
        database.ref(`Baladinha/Usuários/${usuario.id}`).update({
          Mutado: 1
        });

        usuario.roles.add(cargoMutado).catch(O_o => {});

        const sucess = new MessageEmbed()
        .setDescription(`🥊 **${usuario.user.tag}** foi **punido** com sucesso por: **${message.member.user.tag}**.`)
          .setColor(c.cor)
        message.reply(sucess).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))

        const cpunição = new MessageEmbed()
          .setColor(c.cor)
          .setDescription(`🥊 Usuário **Mutado**.

_**Informações:**_
🥋 Usuário: **${usuario.user.tag}**
🦺 Moderador: **${message.member.user.tag}**

_**Sobre:**_
🎈 Motivo: **${motivo}**`)
          .setThumbnail(usuario.user.displayAvatarURL())
          .setAuthor(message.guild.name, message.guild.iconURL())
          .setFooter(message.member.user.tag)
          .setTimestamp()
        message.guild.channels.cache.get("749430358197403749").send(cpunição);
        
        const dm = new MessageEmbed()
          .setDescription(`🥊 Usuário **Mutado**.
_**Informações:**_
🥋 Usuário: **${usuario.user.tag}**
🦺 Moderador: **${message.member.user.tag}**

_**Sobre:**_
🎈 Motivo: **${motivo}**`)
          .setColor(c.cor)
          .setAuthor(message.guild.name, message.guild.iconURL())
          .setFooter(message.member.user.tag)
          .setTimestamp()
        usuario.send(dm).catch(O_o => {})
      }
    });
};