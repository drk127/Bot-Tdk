const { MessageEmbed } = require("discord.js");
const c = require("../config.json");

module.exports.run = async (client, message, args, database) => {

  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Você não possui permissões suficientes. (Banir Membros)`
      )
    return message.reply(embed);
  }

  let member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);

  let cargos = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);

  if (!member) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `_**Como usar:**_
⚙ Gerenciar usuário: **${c.prefix}role <usuário> <add/remove> <cargo>**`
      )
    return message.reply(embed)
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    const np = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Desculpe, mas não tenho permissões suficientes. (Gerenciar Cargos)`
      )
    return message.reply(np)
  }
							
  if(!args[1]) {
const npa = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Informe oque deseja fazer \`add/remove\`.`
      )
    return message.reply(npa)
}

switch (args[1]) {
      case "add":

        if(!cargos) {
          const npa = new MessageEmbed()
                .setColor(c.cor)
                .setDescription(
                  `🛑 Especifique o cargo desejado.`
                )
              return message.reply(npa)
          }

	if(member.roles.cache.has(cargos.id)) {
const embed = new MessageEmbed()
                .setColor(c.cor)
                .setDescription(
                  `🛑 O usuário já possui o cargo **${cargos}**.`
                )
              return message.reply(embed)
}

const sucesso = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🗃 Adicionado ${cargos} a ${member.user}.`
      )
    message.reply(sucesso).then(msg => {

member.roles.add(cargos).catch(O_o => {
const np = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Desculpe, mas não foi possivel fazer isso.`
      )
    msg.edit(np)

})
})      
	break;

	case "remove":

    if(!cargos) {
      const npa = new MessageEmbed()
            .setColor(c.cor)
            .setDescription(
              `🛑 Especifique o cargo desejado.`
            )
          return message.reply(npa)
      }

if(!member.roles.cache.has(cargos.id)) {
const embed = new MessageEmbed()
                .setColor(c.cor)
                .setDescription(
                  `🛑 O usuário não possui o cargo **${cargos}**.`
                )
              return message.reply(embed)
}

const sucess = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🗃 Removido ${cargos} de ${member.user}.`
      )
    message.reply(sucess).then(msg => {

member.roles.remove(cargos).catch(O_o => {
const np = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Desculpe, mas não foi possivel fazer isso.`
      )
    msg.edit(np)
})
})
  break;
  
  default:
    const ui = new MessageEmbed()
    .setColor(c.cor)
    .setDescription(
      `_**Como usar:**_
⚙ Gerenciar usuário: **${c.prefix}role <usuário> <add/remove> <cargo>**`
    )
  return message.reply(ui)
  break
}

};