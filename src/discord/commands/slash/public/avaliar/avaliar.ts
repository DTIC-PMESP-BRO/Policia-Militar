import { createCommand } from "#base";
import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import militarHandler from "./militar.js";
import opmHandler from "./opm.js";

export default createCommand({
    name: "avaliar",
    description: "Comandos de Avaliação - Público",
    type: ApplicationCommandType.ChatInput,

    options: [
        {
            name: "opm",
            description: "Avaliar Organização Policial-Militar",
            type: ApplicationCommandOptionType.Subcommand,
            options: opmHandler.options as any
        },
        {
            name: "militar",
            description: "Avaliar Policial Militar",
            type: ApplicationCommandOptionType.Subcommand,
            options: militarHandler.options as any
        }
    ],

    async run(interaction) {
        const sub = interaction.options.getSubcommand();

        if (sub === "opm") return opmHandler.run(interaction);
        if (sub === "militar") return militarHandler.run(interaction);
    },

    async autocomplete(interaction) {
        const sub = interaction.options.getSubcommand();

        if (sub === "opm") return opmHandler.autocomplete(interaction);
        if (sub === "militar") return militarHandler.autocomplete(interaction);
    }
});
