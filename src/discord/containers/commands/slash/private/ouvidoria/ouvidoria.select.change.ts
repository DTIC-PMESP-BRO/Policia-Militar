import { brBuilder, createContainer, createSection, createSeparator } from "@magicyan/discord";
import { ComponentType, GuildMember, StringSelectMenuBuilder } from "discord.js";
import { icon } from "../../../../../../functions/utils/emojis.js";

export function ouvidoriaSelectChangeContainer(member: GuildMember, ouvidoriaEmoji: any, ouvidoriaResponsavelNumber: string) {
    return createContainer({
        components: [
            createSection(
                brBuilder(
                    `## ${ouvidoriaEmoji} Atendimento ao Militar`,
                    `-# Militar Solicitante: ${member.user}`,
                    `-# ID do Usuário: ${member.id}`
                ),
                {
                    media: {
                        url: member.displayAvatarURL()
                    },
                    description: `Perfil de ${member.user.username}`
                }
            ),
            createSeparator(true, true),
            new StringSelectMenuBuilder({
                customId: `/ouvidoria/${ouvidoriaResponsavelNumber}/select/change/select`,
                max_values: 1,
                type: ComponentType.StringSelect,
                options: [
                    { label: "Ouvidoria - Diretoria de Pessoal", value: "ouvidoriadp", emoji: icon.dp },
                    { label: "Ouvidoria - Corregedoria", value: "ouvidoriacorreg", emoji: icon.correg },
                ],
                placeholder: "Selecione Qual Atendimento Desejas Receber"
            })
        ]
    })
}