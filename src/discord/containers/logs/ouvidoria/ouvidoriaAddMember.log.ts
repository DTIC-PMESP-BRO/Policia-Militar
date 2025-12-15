import { brBuilder, createContainer, createSection } from "@magicyan/discord";
import { GuildMember, TimestampStyles, time } from "discord.js";
import { icon } from "../../../../functions/utils/emojis.js";

export function ouvidoriaAddMemberLogContainer(member: GuildMember, identificador: string, memberAdd: GuildMember) {
    return createContainer({
        components: [
            createSection(
                brBuilder(
                    `${icon.clipboard} Membro Adicionado ao Atendimento - ${identificador}`,
                    `${icon.clock} ${time(new Date(), TimestampStyles.LongDateShortTime)}`,
                    `${icon.user} ${member.user}`,
                    `${icon.user_add} ${memberAdd.user}`
                ),
                {
                    media: {
                        url: member.displayAvatarURL()
                    },
                    description: `Foto de perfil de ${member.user.username}`
                }
            )
        ]
    });
}
