const Discord = require('discord.js');
const snekfetch = require('node-fetch');

module.exports = {
    name: 'achieviment',
    category: 'minecraft',
    description: 'Achieviment image',
    aliases: ['conquista'],
    run: async (bot, message, args) => {
        let [title, contents] = args.join(" ").split("|");
  if (!contents) [title, contents] = ["Conquista desbloqueada!", title];
  let rnd = Math.floor((Math.random() * 39) + 1);

  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;

  if (!args.join(" ")) return message.channel.send(":thinking:** | Por favor insira uma conquista**")
  if (title.length > 24 || contents.length > 22) return message.channel.send("Você inseriu mais de 22 caracteres.");
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch(url).then(r => message.channel.send({files:[{attachment: r.body}]}));
    }
}