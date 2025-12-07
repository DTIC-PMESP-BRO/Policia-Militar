import { createCommand } from "#base";
import { brBuilder } from "@magicyan/discord";
import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import { icon } from "../../../../functions/utils/emojis.js";

createCommand({
    name: "criar",
    description: "Comandos de envio",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "set",
            description: "Cria comando !set - DP",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "militares",
                    description: "Mencione os militares a qual serão setados.",
                    type: ApplicationCommandOptionType.String,
                    required: true
                },
                {
                    name: "patente",
                    description: "Selecione a patente a qual será setada.",
                    type: ApplicationCommandOptionType.String,
                    required: true,
                    autocomplete: true
                }
            ]
        },
        {
            name: "unset",
            description: "Cria comando !unset - DP",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "militares",
                    description: "Mencione os militares a qual serão retirados.",
                    type: ApplicationCommandOptionType.String,
                    required: true
                }
            ]
        }
    ],

    async run(interaction) {
        if (interaction.options.getSubcommand() === "set") {
            const militares = interaction.options.getString("militares");
            let patente = interaction.options.getString("patente");

            const ids = militares!
                .match(/<@!?(\d+)>/g)
                ?.map(m => m.replace(/\D/g, ""))
                .join(",") || "";

            switch (patente) {
                case "Coronel PM":
                    patente = "coronel"
                    break;
                case "Tenente-Coronel PM":
                    patente = "tenentecoronel"
                    break;
                case "Major PM":
                    patente = "major"
                    break;
                case "Capitão PM":
                    patente = "capitao"
                    break;
                case "1º Tenente PM":
                    patente = "tenente1"
                    break;
                case "2º Tenente PM":
                    patente = "tenente2"
                    break;
                case "Aspirante a Oficial PM":
                    patente = "aspiranteaoficial"
                    break;
                case "Aluno Oficial PM 4º Ano":
                    patente = "aluno"
                    break;
                case "Aluno Oficial PM 3º Ano":
                    patente = "aluno"
                    break;
                case "Aluno Oficial PM 2º Ano":
                    patente = "aluno"
                    break;
                case "Aluno Oficial PM 1º Ano":
                    patente = "aluno"
                    break;
                case "Subtenente PM":
                    patente = "subtenente"
                    break;
                case "1º Sargento PM":
                    patente = "sargento1"
                    break;
                case "2º Sargento PM":
                    patente = "sargento2"
                    break;
                case "3º Sargento PM":
                    patente = "sargento3"
                    break;
                case "Aluno Sargento PM":
                    patente = "aluno"
                    break;
                case "Cabo PM":
                    patente = "cabo"
                    break;
                case "Soldado 1º Classe PM":
                    patente = "soldado"
                    break;
                case "Soldado 2º Classe PM":
                    patente = "soldado"
                    break;
                case "Aluno - Soldado 2º Classe PM":
                    patente = "aluno"
                    break;
                case "Rodoviária - 22º BPRv":
                    patente = "rodoviaria"
                    break;
                case "GATE - 4º BPChq":
                    patente = "gate"
                    break;
                case "ROTA - 1º BPChq":
                    patente = "rota"
                    break;
                case "Tático Ostensivo Rodoviário":
                    patente = "tor"
                    break;
                case "Força Tática - 22º BPM/M":
                    patente = "forcatatica"
                    break;
                case "Corregedoria da Polícia Militar":
                    patente = "corregedoria"
                    break;
            }

            await interaction.reply({
                flags: ["Ephemeral"],
                content: brBuilder(
                    `${icon.action_check} Comando !set gerado com sucesso.`,
                    `\`\`\`!set ${ids} pm ${patente}\`\`\``
                )
            })
        } else if (interaction.options.getSubcommand() === "unset") {
            const militares = interaction.options.getString("militares");
            let patente = interaction.options.getString("patente");

            const ids = militares!
                .match(/<@!?(\d+)>/g)
                ?.map(m => m.replace(/\D/g, ""))
                .join(",") || "";

            switch (patente) {
                case "Coronel PM":
                    patente = "coronel"
                    break;
                case "Tenente-Coronel PM":
                    patente = "tenentecoronel"
                    break;
                case "Major PM":
                    patente = "major"
                    break;
                case "Capitão PM":
                    patente = "capitao"
                    break;
                case "1º Tenente PM":
                    patente = "tenente1"
                    break;
                case "2º Tenente PM":
                    patente = "tenente2"
                    break;
                case "Aspirante a Oficial PM":
                    patente = "aspiranteaoficial"
                    break;
                case "Aluno Oficial PM 4º Ano":
                    patente = "aluno"
                    break;
                case "Aluno Oficial PM 3º Ano":
                    patente = "aluno"
                    break;
                case "Aluno Oficial PM 2º Ano":
                    patente = "aluno"
                    break;
                case "Aluno Oficial PM 1º Ano":
                    patente = "aluno"
                    break;
                case "Subtenente PM":
                    patente = "subtenente"
                    break;
                case "1º Sargento PM":
                    patente = "sargento1"
                    break;
                case "2º Sargento PM":
                    patente = "sargento2"
                    break;
                case "3º Sargento PM":
                    patente = "sargento3"
                    break;
                case "Aluno Sargento PM":
                    patente = "aluno"
                    break;
                case "Cabo PM":
                    patente = "cabo"
                    break;
                case "Soldado 1º Classe PM":
                    patente = "soldado"
                    break;
                case "Soldado 2º Classe PM":
                    patente = "soldado"
                    break;
                case "Aluno - Soldado 2º Classe PM":
                    patente = "aluno"
                    break;
                case "Rodoviária - 22º BPRv":
                    patente = "rodoviaria"
                    break;
                case "GATE - 4º BPChq":
                    patente = "gate"
                    break;
                case "ROTA - 1º BPChq":
                    patente = "rota"
                    break;
                case "Tático Ostensivo Rodoviário":
                    patente = "tor"
                    break;
                case "Força Tática - 22º BPM/M":
                    patente = "forcatatica"
                    break;
                case "Corregedoria da Polícia Militar":
                    patente = "corregedoria"
                    break;
            }

            await interaction.reply({
                flags: ["Ephemeral"],
                content: brBuilder(
                    `${icon.action_check} Comando !unset gerado com sucesso.`,
                    `\`\`\`!unset ${ids} pm\`\`\``
                )
            })
        }
    },

    async autocomplete(interaction) {
        const focused = interaction.options.getFocused(true);

        if (focused.name === "patente") {
            const sugestões = [
                "Coronel PM",
                "Tenente-Coronel PM",
                "Major PM",
                "Capitão PM",
                "1º Tenente PM",
                "2º Tenente PM",
                "Aspirante a Oficial PM",
                "Aluno Oficial PM 4º Ano",
                "Aluno Oficial PM 3º Ano",
                "Aluno Oficial PM 2º Ano",
                "Aluno Oficial PM 1º Ano",
                "Subtenente PM",
                "1º Sargento PM",
                "2º Sargento PM",
                "3º Sargento PM",
                "Aluno Sargento PM",
                "Cabo PM",
                "Soldado 1º Classe PM",
                "Soldado 2º Classe PM",
                "Aluno - Soldado 2º Classe PM"
            ].filter(s => s.toLowerCase().includes(focused.value.toLowerCase()));

            return interaction.respond(
                sugestões.map(s => ({ name: s, value: s }))
            );
        }
    }
});
