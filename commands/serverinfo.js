const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const c = require("../config.json");

module.exports.run = (client, message, args) => {
  let date = message.guild.createdAt;

  function formatDate(template, date) {
    var specs = "YYYY:MM:DD:HH:mm".split(":");
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);
    return date
      .toISOString()
      .split(/[-:.TZ]/)
      .reduce(function(template, item, i) {
        return template.split(specs[i]).join(item);
      }, template);
  }

  function checkBots(guild) {
    let botCount = 0;
    guild.members.cache.forEach(member => {
      if (member.user.bot) botCount++;
    });
    return botCount;
  }

  function checkMembers(guild) {
    let memberCount = 0;
    guild.members.cache.forEach(member => {
      if (!member.user.bot) memberCount++;
    });
    return memberCount;
  }

  const server = new MessageEmbed()
    .setDescription(`_**Sobre:**_
🥋 Nome: **${message.guild.name}**
🆔 ID: **${message.guild.id}**
🦺 Dono a: **${message.guild.owner}**

_**Informações:**_
🛠 Administração: **${message.guild.members.cache.filter(m => m.roles.cache.has("881188770580422697") +  m.roles.cache.has("907064281734983691")).size + " Staff(s)"}**
🧬 Bot Oficial: **<@901963780752289843>**
📅 Criado em: **${formatDate("DD/MM/YYYY, às HH:mm", date)}**
⚗ Membros: **${checkMembers(message.guild)}**
🌌 bots: **${checkBots(message.guild)}**`)
    .setThumbnail(message.guild.iconURL())
    .setColor(c.cor)
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setFooter(message.member.user.tag)
    .setTimestamp()
  return message.reply(server);
};