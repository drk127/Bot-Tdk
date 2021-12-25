const { MessageEmbed } = require("discord.js");
const c = require("../config.json");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_EMOJIS")) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        "🛑 Você não possui permissões suficientes. (Gerenciar Emojis)"
      )
    message.reply(embed);
  }

  message.delete()

  const emoteName = args[0];
  const emoteURL = args[1];

  if (!emoteName) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `_**Como usar:**_
⚙ Adicionar emoji: **${c.prefix}addemoji <nome> <url>**`
      )
    return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
  }
  
  if (!emoteURL) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription("🛑  Informe a URL do emoji.")
    return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
  }

  const emoteSize = emoteURL.size;
  
  if (emoteSize < 256000) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑  Seu arquivo tem ${emoteSize} bytes, você pode tentar cortá-lo ou reduzir o tamanho. Ele precisa ser igual ou menor que 256000 bytes para que o emote seja adicionado.`
      )
    return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
  }

  message.guild.emojis.create(emoteURL, emoteName).catch((err, error) => {
    const embed = new MessageEmbed()
    .setColor(c.cor)
    .setDescription(
      "🛑 Ocorreu um erro ao tentar adicionar o emoji."
    )
  message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
})

    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🍕 O emoji ${emoteName} foi adicionado com sucesso!`
      )
    message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
};