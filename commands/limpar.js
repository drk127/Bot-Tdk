const { MessageEmbed } = require("discord.js");
const c = require("../config.json");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Você não possui permissões suficientes. (Gerenciar Mensagens)`
      )
    return message.reply(embed);
  }

  if (!args[0]) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Informe a quantidade que deseja apagar.`
      )
    return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
  }

  var limit = 100;

  if (args.length === 1) {
    limit = parseInt(args[0]);
  }

  limit++;

  limit = Math.min(limit, 99);

  message.channel.bulkDelete(limit);

  const sucess = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🚯 **${limit}** Mensagens apagadas por: **${message.member.user.tag}**`
      )
  message.channel.send(sucess).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
};