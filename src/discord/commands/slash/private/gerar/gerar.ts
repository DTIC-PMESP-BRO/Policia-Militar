import { createCommand } from "#base";
import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import setHandler from "./set.js";
import unsetHandler from "./unset.js";

export default createCommand({
    name: "gerar",
    description: "Comandos de Geração Set/Unset - DP",
    type: ApplicationCommandType.ChatInput,

    options: [
        {
            name: "set",
            description: "Gera mensangem !set para o servidor principal.",
            type: ApplicationCommandOptionType.Subcommand,
            options: setHandler.options as any
        },
        {
            name: "unset",
            description: "Gera mensangem !unset para o servidor principal.",
            type: ApplicationCommandOptionType.Subcommand,
            options: unsetHandler.options as any
        }
    ],

    async run(interaction) {
        const sub = interaction.options.getSubcommand();

        if (sub === "set") return setHandler.run(interaction);
        if (sub === "unset") return unsetHandler.run(interaction);
    },

    async autocomplete(interaction) {
        const sub = interaction.options.getSubcommand();

        if (sub === "set") return setHandler.autocomplete(interaction);
    }
});
