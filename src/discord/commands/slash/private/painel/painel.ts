import { createCommand } from "#base";
import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import ouvidoriaHandler from "./ouvidoria.js";
import registroHandler from "./registro.js";

export default createCommand({
    name: "painel",
    description: "Comandos de Geração Set/Unset - DP",
    type: ApplicationCommandType.ChatInput,

    options: [
        {
            name: "ouvidoria",
            description: "Envia o painel da ouvidoria.",
            type: ApplicationCommandOptionType.Subcommand
        },
        {
            name: "registro",
            description: "Envia o painel de registro.",
            type: ApplicationCommandOptionType.Subcommand
        }
    ],

    async run(interaction) {
        const sub = interaction.options.getSubcommand();

        if (sub === "ouvidoria") return ouvidoriaHandler.run(interaction);
        if (sub === "registro") return registroHandler.run(interaction);
    }
});
