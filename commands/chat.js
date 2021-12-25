const { MessageEmbed } = require("discord.js");
const c = require("../config.json");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Você não possui permissões suficientes. (Gerenciar Canais)`
      )
    return message.reply(embed)
  }

  message.delete()

  let estado = args[0];

  if (!estado) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Use, \`${c.prefix}chat <on/off>\``
      )
    return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
  }

  switch (args[0]) {
    case "on":

      await message.channel.updateOverwrite(
        message.channel.guild.roles.everyone,
        { SEND_MESSAGES: true }
      );

      const on = new MessageEmbed()
      .setDescription(`🚧 Chat **aberto** por: **${message.member.user.tag}**`)
      .setColor(c.cor)
      return message.reply(on).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))

      break;

    case "off":

      await message.channel.updateOverwrite(
        message.channel.guild.roles.everyone,
        { SEND_MESSAGES: false }
      );

      const off = new MessageEmbed()
        .setDescription(`🚧 Chat **fechado** por: **${message.member.user.tag}**`)
        .setColor(c.cor)
      return message.reply(off).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))

      break;
  }
};