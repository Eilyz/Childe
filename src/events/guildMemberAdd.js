import { GuildMember, MessageEmbed } from 'discord.js'

export default {
  name: 'guildMemberAdd',
  once: false,

  /** @param { GuildMember } member */
  async execute (member) {
    const welcomeChannel = await member.guild.channels.fetch('855551315501645844', { cache: true }).catch(() => {})

    welcomeChannel.send({
      content:
        `Welcome to the Golden House, ${member}! Check out <#887126756354580480> to get access to the rest of the server!`,
      embeds: [
        new MessageEmbed({
          color: 'BLUE',
          image: {
            url: 'https://i.imgur.com/A0ndVx2.png',
          },
        }),
      ],
    })
  },
}
