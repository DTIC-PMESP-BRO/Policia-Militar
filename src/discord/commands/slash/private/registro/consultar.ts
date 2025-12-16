import { ApplicationCommandOptionType, ChatInputCommandInteraction } from "discord.js";
import { db } from "../../../../../database/firestore.js";
import { icon } from "../../../../../functions/utils/emojis.js";
import { registroConsultarContainer } from "../../../../containers/commands/slash/private/registro/registro.consultar.js";

export default {
    options: [
        {
            name: "rg",
            description: "Informe o Registro Geral do Militar.",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],

    async run(interaction: ChatInputCommandInteraction<"cached">) {
        const rg = interaction.options.getString("rg")!;

        const docRef = db.collection("militares").doc(rg);
        const doc = await docRef.get();

        if (!doc.exists) {
            await interaction.reply({
                flags: ["Ephemeral"],
                content: `${icon.action_x} Não há registros para este registro geral.`
            })
            return;
        }

        const data = doc.data();

        if (!data) {
            await interaction.reply({
                flags: ["Ephemeral"],
                content: `${icon.action_x} Os dados do documento estão vazios.`
            })
            return;
        }

        const militar = await interaction.guild.members.fetch(data.memberId);

        await interaction.reply({
            flags: ["Ephemeral", "IsComponentsV2"],
            components: [registroConsultarContainer(militar, data.nome, data.patente, data.rg, data.opm, data.status)]
        })
    }
};
