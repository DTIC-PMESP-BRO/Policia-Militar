import { brBuilder, createContainer, createSection } from "@magicyan/discord";
import { GuildMember, TimestampStyles, time } from "discord.js";
import { icon } from "../../../../functions/utils/emojis.js";

export function ouvidoriaOpenLogContainer(member: GuildMember, identificador: string) {
    return createContainer({
        components: [
            createSection(
                brBuilder(
                    `${icon.clipboard} Atendimento Iniciado - ${identificador}`,
                    `${icon.clock} ${time(new Date(), TimestampStyles.LongDateShortTime)}`,
                    `${icon.user} ${member.user}`
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
