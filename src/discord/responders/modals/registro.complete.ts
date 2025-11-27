import { createResponder, ResponderType } from "#base";
import { icon } from "../../../functions/utils/emojis.js";

createResponder({
    customId: "registro/modal/pag1",
    types: [ResponderType.ModalComponent], cache: "cached",
    async run(interaction) {
        const fields = interaction.fields;

        const name = fields.getTextInputValue("nome");
        const rg = fields.getTextInputValue("rg");
        const [opm] = fields.getStringSelectValues("opm");

        await interaction.reply({
            flags: ["Ephemeral"],
            content: `${icon.action_check} Registro estatístico enviado a Diretoria de Pessoal.`
        })

        console.log(`${name}, ${rg}, ${opm}`)
    },
});