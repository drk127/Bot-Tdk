const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const c = require("../config.json");

module.exports.run = (client, message, args) => {
  let date = client.user.createdAt;

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

  let dias = 0;
  let semanas = 0;
  
  let uptime = ``;
  let totalSegundos = (client.uptime / 1000);
  let horas = Math.floor(totalSegundos / 3600);
  totalSegundos %= 3600;
  let minutos = Math.floor(totalSegundos / 60);
  let segundos = Math.floor(totalSegundos % 60);
  
  if(horas > 23){
    dias = dias + 1;
    horas = 0;
  }
  
  if(dias == 7){
  dias = 0;
  semanas = semanas + 1;
  }
  
  if(semanas > 0){
    uptime += `${semanas} Semana(s), `;
  }
  
  if(minutos > 60){
    minutos = 0;
  }
  
  uptime += `${dias}d, ${horas}h, ${minutos}m, ${segundos}s`;

  const embed = new MessageEmbed()
    .setDescription(`_**Sobre:**_
🤖 Nome: **${client.user.username}**
🆔 ID: **${client.user.id}**
🦺 Criador: **<@901766822599196742>**

_**Informações:**_
📅 Criado em: **${formatDate("DD/MM/YYYY, às HH:mm", date)}**
📮 Resposta: **${Date.now() - message.createdTimestamp}ms**
📊 Uptime: **${uptime}**`)
    .setColor(c.cor)
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setFooter(message.member.user.tag)
    .setTimestamp()
  return message.reply(embed);
};