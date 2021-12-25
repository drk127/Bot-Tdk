const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const c = require("../config.json");

const status = {
  online: "Online",
  idle: "Ausente",
  dnd: "Ocupado",
  offline: "Offline/Invisivel"
};

module.exports.run = (client, message, args, database) => {
  let member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]) ||
    message.member;

  let date = member.user.createdAt;

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

  const embed = new MessageEmbed()
    .setColor(c.cor)
    .setDescription(`_**Sobre:**_
🥋 Usuário: **${member.user.tag}**
🆔 ID: **${member.user.id}**

_**Informações:**_
⛳ Status: **${status[member.user.presence.status]}**
📅 Conta criada em: **${formatDate("DD/MM/YYYY, às HH:mm", date)}**
🗃 Cargos: **${ member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(", ") || "Nenhum cargo"}**`)
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setFooter(message.member.user.tag)
    .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true }))
    .setTimestamp()
  return message.reply(embed);
};