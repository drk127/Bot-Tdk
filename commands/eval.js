const { MessageEmbed } = require('discord.js');
const { inspect } = require('util')
const c = require("../config.json");

exports.run = (client, message, args) => {

    if(message.author.id != '901766822599196742') {
        const embed = new MessageEmbed()
          .setColor(c.cor)
          .setDescription(
            "🛑 Somente meu criador por usar isso."
          )
        return message.reply(embed);
      }

        const input = args.join(" ");
        try {
            let output = eval(input);

            if(typeof output !== "string") output = inspect(output);

            if(output.size > 1950) output = output.substr(0, 1950);

            message.channel.send(`**Saida:**\n\`\`\`js\n${output}\n\`\`\``)
        } catch (error) {
            message.channel.send(`**Error:**\n\`${error}\``);
        }
        
}