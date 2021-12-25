const { MessageEmbed } = require("discord.js");
const c = require("../config.json");
const e = require("express");

module.exports.run = async (client, message, args) => {
  if (!args[0]) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Me fale o nome de um emoji válido`
      )
    return message.reply(embed)
  }

  let emoji = message.guild.emojis.cache.find(e => e.name == args[0]) || message.guild.emojis.cache.find(e => e.id == args.join(' ').slice(0))

  if(!emoji) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Me fale o nome de um emoji válido`
      )
    return message.reply(embed)
  }

  const embed = new MessageEmbed()
    .setColor(c.cor)
    .setDescription(`_**Sobre**_
🧩 Emoji: **${emoji}**
🆔 ID: **${emoji.id}**
📌 URL: **${emoji.url}**`)
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setFooter(message.member.user.tag)
    .setTimestamp()
  return message.reply(embed);
};