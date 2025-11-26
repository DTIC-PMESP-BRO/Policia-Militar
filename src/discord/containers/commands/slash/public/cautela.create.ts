import { brBuilder, createContainer, createSection, createTextDisplay, Separator } from "@magicyan/discord";
import { GuildMember } from "discord.js";
import { icon } from "../../../../../functions/utils/emojis.js";

export async function cautelaCreateContainer(member: GuildMember, opm: string, modelo: string, prefixo: string, motivo: string, timestamp: string) {
    return createContainer({
        components: [
            createSection(
                brBuilder(
                    `## ${icon.pmesp} Cautelamento de Viatura`,
                    `${icon.user} ${member.user} (${member.id})`
                ),
                {
                    media: {
                        url: member.displayAvatarURL()
                    },
                    description: `Foto de perfil de ${member.user.username}`
                }
            ),
            Separator.Large,
            createTextDisplay(
                brBuilder(
                    `> **OPM:** ${opm}`,
                    `> **Modelo da viatura:** ${modelo}`,
                    `> **Prefixo:** ${prefixo}`,
                    `> **Motivo:** ${motivo}`,
                    `> **Data/Hora:** ${timestamp}`,
                )
            )
        ]
    });
}
