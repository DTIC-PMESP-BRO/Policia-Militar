import { createCommand } from "#base";
import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import aprovarHandler from "./aprovar.js";
import reprovarHandler from "./reprovar.js";

export default createCommand({
    name: "sugestão",
    description: "Comandos de Sugestão - Comando",
    type: ApplicationCommandType.ChatInput,

    options: [
        {
            name: "aprovar",
            description: "Aprovar Sugestão",
            type: ApplicationCommandOptionType.Subcommand,
            options: aprovarHandler.options as any
        },
        {
            name: "reprovar",
            description: "Reprovar Sugestão",
            type: ApplicationCommandOptionType.Subcommand,
            options: reprovarHandler.options as any
        }
    ],

    async run(interaction) {
        const sub = interaction.options.getSubcommand();

        if (sub === "aprovar") return aprovarHandler.run(interaction);
        if (sub === "reprovar") return reprovarHandler.run(interaction);
    }
});
