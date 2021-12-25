const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
	    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`🚫 **|** ${message.author}, você tem que ter a permissão de **Administrador** para usar esse comando!`);
		
const emoji_1 = "🗂" //Emoji seta
const e1 = client.emojis.cache.find(emoji => emoji.id === emoji_1);
const emoji_2 = "🗂" //Emoji seta
const e2 = client.emojis.cache.find(emoji => emoji.id === emoji_2);

const embed = new MessageEmbed()
.setTitle(`ㅤㅤ${e2}ㅤPainel De Configuração Registroㅤ${e2}ㅤㅤ`)
.setDescription(`
**Como configurar**: Basta digitar !config e a categoria e mencionar o cargo ou o id

ㅤㅤㅤㅤㅤㅤAqui Estão As Categorias:ㅤㅤㅤㅤㅤㅤ
<:zk_timido:880274576385388554> **Masculino** = \`!config masculino <@cargo ou id>\`
<:1999_copo:907680538733711430> **Feminino** = \`!config feminino <@cargo ou id>\`
<:zk_cdi_oclin:881627650748219423> **Não Binario** = \`!config naobinario <@cargo ou id>\`

<:zf_cdi_gatinhu:881628798569807893> **Mais 18** = \`!config mais18 <@cargo ou id>\`
<:zi_cdi_desmascarado:881629044217634857> **Menos 18** = \`!config menos18 <@cargo ou id>\`

<:zk_cdi_capetinha:881629192133951530> **Hetero** = \`!config hetero <@cargo ou id>\`
<:zb_cdi_quebroumeucora:881628552569684058> **LGBT** = \`!config lgbt <@cargo ou id>\`

 **Registrado** = \`!config registrado <@cargo ou id>\`
<:Ykz_serelepe:881894767057838091>**Não Registrado** = \`!config naoregistrado <@cargo ou id>\`

<:GOS_BEIGE_47:8818650776560149 **Canal de Logs** = \`!config logs <#canal ou id>\`
<:z_ThinkPika:881892312542773328> **Cargo de Equipe de Registro** = \`!config equipe <@cargo ou id>\`

<:_gatomandrak:881326959202803802> **Resetar Todas As Configurações** = \`!config reset\`
`)
if(!args[0]) return message.channel.send(embed);

        if (args[0] === 'masculino') {

            let cargo_masculino = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_masculino) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`!config-registro masculino @cargo-masculino\`.`);
            db.set(`registro_masculino_${message.guild.id}`, cargo_masculino.id);

            let cargo_masculino_config = db.get(`registro_masculino_${message.guild.id}`, cargo_masculino.id);

            message.channel.send(`✅ | ${message.author} cargo masculino setado para <@&${cargo_masculino_config}> com sucesso.`)
        }
        if (args[0] === 'feminino') {

            let cargo_feminino = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_feminino) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`!config-registro feminino @cargo-feminino\`.`);
            db.set(`registro_feminino_${message.guild.id}`, cargo_feminino.id);

            let cargo_feminino_config = db.get(`registro_masculino_${message.guild.id}`, cargo_feminino.id);

            message.channel.send(`✅ | ${message.author} cargo feminino setado para <@&${cargo_feminino_config}> com sucesso.`)
        }
        if (args[0] === 'naobinario') {

            let cargo_naobinario = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_naobinario) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`!config-registro naobinario @cargo-naobinario\`.`);
            db.set(`registro_naobinario_${message.guild.id}`, cargo_naobinario.id);

            let cargo_naobinario_config = db.get(`registro_naobinario_${message.guild.id}`, cargo_naobinario.id);

            message.channel.send(`✅ | ${message.author} cargo naobinario setado para <@&${cargo_naobinario_config}> com sucesso.`)
        }


        if (args[0] === 'mais18') {

            let cargo_mais18 = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_mais18) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`!config-registro mais18 @cargo-mais18\`.`);
            db.set(`registro_mais18_${message.guild.id}`, cargo_mais18.id);

            let cargo_mais18_config = db.get(`registro_mais18_${message.guild.id}`, cargo_mais18.id);

            message.channel.send(`✅ | ${message.author} cargo mais18 setado para <@&${cargo_mais18_config}> com sucesso.`)
        }
        if (args[0] === 'menos18') {

            let cargo_menos18 = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_menos18) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`!config-registro menos18 @cargo-menos18\`.`);
            db.set(`registro_menos18_${message.guild.id}`, cargo_menos18.id);

            let cargo_menos18_config = db.get(`registro_menos18_${message.guild.id}`, cargo_menos18.id);

            message.channel.send(`✅ | ${message.author} cargo menos18 setado para <@&${cargo_menos18_config}> com sucesso.`)
        }


        if (args[0] === 'hetero') {

            let cargo_hetero = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_hetero) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`!config-registro hetero @cargo-hetero\`.`);
            db.set(`registro_hetero_${message.guild.id}`, cargo_hetero.id);

            let cargo_hetero_config = db.get(`registro_hetero_${message.guild.id}`, cargo_hetero.id);

            message.channel.send(`✅ | ${message.author} cargo hetero setado para <@&${cargo_hetero_config}> com sucesso.`)
        }
        if (args[0] === 'lgbt') {

            let cargo_lgbt = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_lgbt) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`!config-registro lgbt @cargo-lgbt\`.`);
            db.set(`registro_lgbt_${message.guild.id}`, cargo_lgbt.id);

            let cargo_lgbt_config = db.get(`registro_lgbt_${message.guild.id}`, cargo_lgbt.id);

            message.channel.send(`✅ | ${message.author} cargo lgbt setado para <@&${cargo_lgbt_config}> com sucesso.`)
        }


        if (args[0] === 'registrado') {

            let cargo_registrado = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_registrado) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`!config-registro registrado @cargo-registrado\`.`);
            db.set(`registro_registrado_${message.guild.id}`, cargo_registrado.id);

            let cargo_registrado_config = db.get(`registro_registrado_${message.guild.id}`, cargo_registrado.id);

            message.channel.send(`✅ | ${message.author} cargo registrado setado para <@&${cargo_registrado_config}> com sucesso.`)
        }
        if (args[0] === 'naoregistrado') {

            let cargo_naoregistrado = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_naoregistrado) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`!config-registro naoregistrado @cargo-naoregistrado\`.`);
            db.set(`registro_naoregistrado_${message.guild.id}`, cargo_naoregistrado.id);

            let cargo_naoregistrado_config = db.get(`registro_naoregistrado_${message.guild.id}`, cargo_naoregistrado.id);

            message.channel.send(`✅ | ${message.author} cargo naoregistrado setado para <@&${cargo_naoregistrado_config}> com sucesso.`)
        }


        if (args[0] === 'logs') {

            let cargo_logs = message.mentions.channels.first() || message.guild.channels.cache.get(args[2]);
            if(!cargo_logs) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`!config-registro logs #canal-logs\`.`);
            db.set(`registro_logs_${message.guild.id}`, cargo_logs.id);

            let cargo_logs_config = db.get(`registro_logs_${message.guild.id}`, cargo_logs.id);

            message.channel.send(`✅ | ${message.author} canal de logs setado para <#${cargo_logs_config}> com sucesso.`)
        }
        if (args[0] === 'equipe') {

            let cargo_equipe = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_equipe) return message.channel.send(`:x: | ${message.author} Você deve escrever com \`!config-registro equipe @cargo-equipe\`.`);
            db.set(`registro_equipe_${message.guild.id}`, cargo_equipe.id);

            let cargo_equipe_config = db.get(`registro_equipe_${message.guild.id}`, cargo_equipe.id);

            message.channel.send(`✅ | ${message.author} cargo equipe setado para <@&${cargo_equipe_config}> com sucesso.`)
        }

        if (args[0] === 'reset') {
        let tempo_all = db.all().map(entry => entry.ID).filter(id => id.startsWith(`registro_`))

        tempo_all.forEach(db.delete)

            message.channel.send(`✅ | ${message.author} reset com sucesso.`)
        }
                   }