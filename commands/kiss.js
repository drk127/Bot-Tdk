const Discord = require("discord.js");
const c = require('../config.json');

module.exports.run = async (client, message, args) => {
    let user = message.mentions.members.first()
    if (!user) {
        const embed = new Discord.MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Use, \`${c.prefix}kiss <membro>.\``
      )
    return message.reply(embed)
    }

    var gif = [
      'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_331.gif',
      'https://loritta.website/assets/img/actions/kiss/female_x_male/gif_372.gif',
      'https://loritta.website/assets/img/actions/kiss/male_x_female/gif_298.gif',
      'https://loritta.website/assets/img/actions/kiss/male_x_male/gif_300.gif',
      'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_358.gif'
  ];

    const embed = new Discord.MessageEmbed()
      .setColor(c.cor)
      .setDescription(
         `_💕 ${message.member.user} beijou **${user.user}**_`
      )
      .setImage(gif[Math.floor(Math.random() * gif.length)])
    return message.reply(embed)
}