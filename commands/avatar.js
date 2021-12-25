const { MessageEmbed } = require("discord.js");
const c = require("../config.json");

module.exports.run = (client, message, args) => {
  let member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]) ||
    message.member;

  const embed = new MessageEmbed()
    .setDescription(
      `_**Informações:**_
🎈 Avatar de: **${member.user.tag}**

**[Click aqui para baixar o avatar](${member.user.displayAvatarURL()})**`
    )
    .setImage(member.user.displayAvatarURL())
    .setColor(c.cor)
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setFooter(message.member.user.tag)
    .setTimestamp()
  return message.reply({ embed });
};