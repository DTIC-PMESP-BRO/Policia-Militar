import { brBuilder, createContainer, createSection } from "@magicyan/discord";
import { Guild, GuildMember, PrivateThreadChannel, PublicThreadChannel } from "discord.js";

export function ouvidoriaSelectThreadInitContainer(member: GuildMember, ouvidoriaEmoji: any, interactionGuild: Guild, thread: PrivateThreadChannel | PublicThreadChannel) {
    return createContainer({
        components: [
            createSection(
                brBuilder(
                    `## ${ouvidoriaEmoji} Atendimento ao Militar`,
                    `-# Usuário Solicitante: ${member.user}`,
                    `-# ID do Usuário: ${member.id}`,
                    `-# [Atendimento Iniciado](https://discord.com/channels/${interactionGuild.id}/${thread.id})`
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