import { createCommand } from "#base";
import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import apreensaoHandler from "./apreensao.js";
import bopmHandler from "./bopm.js";

export default createCommand({
    name: "registrar",
    description: "Comandos de Registro - Público",
    type: ApplicationCommandType.ChatInput,

    options: [
        {
            name: "bopm",
            description: "Registrar Boletim Policial-Militar",
            type: ApplicationCommandOptionType.Subcommand,
            options: bopmHandler.options as any
        },
        {
            name: "apreensão",
            description: "Registrar Talão de Apreensão",
            type: ApplicationCommandOptionType.Subcommand,
            options: apreensaoHandler.options as any
        }
    ],

    async run(interaction) {
        const sub = interaction.options.getSubcommand();

        if (sub === "bopm") return bopmHandler.run(interaction);
        if (sub === "apreensão") return apreensaoHandler.run(interaction);
    },

    async autocomplete(interaction) {
        const sub = interaction.options.getSubcommand();

        if (sub === "bopm") return bopmHandler.autocomplete(interaction);
        if (sub === "apreensão") return apreensaoHandler.autocomplete(interaction);
    }
});
