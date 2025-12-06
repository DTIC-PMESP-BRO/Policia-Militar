import { brBuilder, createContainer, createSection } from "@magicyan/discord";
import { GuildMember } from "discord.js";

export function ouvidoriaSelectCancelContainer(member: GuildMember, ouvidoriaEmoji: any) {
    return createContainer({
        components: [
            createSection(
                brBuilder(
                    `## ${ouvidoriaEmoji} Atendimento ao Militar`,
                    `-# Militar Solicitante: ${member.user}`,
                    `-# ID do Usuário: ${member.id}`,
                    `-# Atendimento Cancelado`
                ),
                {
                    media: {
                        url: member.displayAvatarURL()
                    },
                    description: `Perfil de ${member.user.username}`
                }
            )
        ]
    })
}

