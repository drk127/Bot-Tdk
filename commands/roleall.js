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

let cargos = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

  if (!args[0]) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `_**Como usar:**_
⚙ Gerenciar usuários: **${c.prefix}roleall <add/remove> <cargo>**`
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
							
  if(!args[0]) {
const npa = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Informe oque deseja fazer \`add/remove\`.`
      )
    return message.reply(npa)
}

let i = 0;

switch (args[0]) {
      case "add":

        if(!cargos) {
          const npa = new MessageEmbed()
                .setColor(c.cor)
                .setDescription(
                  `🛑 Especifique o cargo desejado.`
                )
              return message.reply(npa)
          }

          let membersa = message.guild.members.cache.filter(a => a)
let hasa = message.guild.members.cache.filter(m => m.roles.cache.has(cargos.id))
if (membersa.size == hasa.size) {
            const embed = new MessageEmbed()
              .setColor(c.cor)
              .setDescription(
                `🛑 Todos os usuário já possuem essa role.`
              )
            return message.reply(embed)
          }

const sucessa = new MessageEmbed()
              .setColor(c.cor)
              .setDescription(
                `🧲 Carregando...`
              )
            message.reply(sucessa).then(msg => {

              membros = message.guild.members.cache.array()
              for (var i = 0; i < membros.length; i++ ) {
              if (!membros[i].roles.cache.has(cargos.id))  {
              membros[i].roles.add(cargos.id)

              const sucessaa = new MessageEmbed()
              .setColor(c.cor)
              .setDescription(
                `🧲 Adicionando **${cargos}** a **${membros[i]}**.`
              )
            msg.edit(sucessaa)
              
              }
              }
              
              const sucessaa = new MessageEmbed()
              .setColor(c.cor)
              .setDescription(
                `🧲 Adicionado **${cargos}** a todos os usuários.`
              )
            msg.edit(sucessaa)

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

      let membersb = message.guild.members.cache.filter(a => a)
let hasb = message.guild.members.cache.filter(m => !m.roles.cache.has(cargos.id))
if (membersb.size == hasb.size) {
        const embed = new MessageEmbed()
          .setColor(c.cor)
          .setDescription(
            `🛑 Todos os usuários não possuem essa role.`
          )
        return message.reply(embed)
      }

      const sucesso = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🧲 Carregando...`
      )
    message.reply(sucesso).then(msg => {

      membros = message.guild.members.cache.array()
      for (var i = 0; i < membros.length; i++ ) {
      if (membros[i].roles.cache.has(cargos.id))  {
      membros[i].roles.remove(cargos.id)

      const sucessaa = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🧲 Removendo **${cargos}** de **${membros[i]}**.`
      )
    msg.edit(sucessaa)
      
      }
      }
      
      const sucessaa = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🧲 Removido **${cargos}** de todos os usuários.`
      )
    msg.edit(sucessaa)

})
  break;

  default:
    const np = new MessageEmbed()
    .setColor(c.cor)
    .setDescription(
      `_**Como usar:**_
⚙ Gerenciar usuários: **${c.prefix}roleall <add/remove> <cargo>**`
    )
  message.reply(np)
  break;
  
}

};