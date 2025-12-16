import { createResponder, ResponderType } from "#base";
import { db } from "../../../database/firestore.js";
import { icon } from "../../../functions/utils/emojis.js";
import { ouvidoriaAddMemberLog } from "../../../functions/utils/ouvidorialogs.js";
import { ouvidoriaThreadInitContainer } from "../../containers/commands/slash/private/ouvidoria/ouvidoria.thread.init.js";

createResponder({
    customId: "/ouvidoria/:ouvidoriaResponsavelNumber/memberadd/select",
    types: [ResponderType.UserSelect], cache: "cached",
    async run(interaction, { ouvidoriaResponsavelNumber }) {
        const docRef = db.collection("ouvidoria").doc(ouvidoriaResponsavelNumber);
        const doc = await docRef.get();

        if (!doc.exists) {
            await interaction.reply({
                flags: ["Ephemeral"],
                content: `${icon.action_x} Este atendimento está corrompido, tente novamente!`
            })
            return;
        }

        const data = doc.data();

        if (!data) {
            await interaction.reply({
                flags: ["Ephemeral"],
                content: `${icon.action_x} Os dados do documento estão vazios`
            })
            return;
        }

        const solicitante = await interaction.guild.members.fetch(data.memberId)

        if (!solicitante) return;

        const selectedMember = await interaction.guild.members.fetch(interaction.values?.[0])

        await interaction.update({
            flags: ["IsComponentsV2"],
            components: [ouvidoriaThreadInitContainer(solicitante, data.ouvidoriaEmoji, data.ouvidoriaRoleId, ouvidoriaResponsavelNumber)]
        })

        if (!interaction.channel) return;

        await ouvidoriaAddMemberLog(interaction.member, `${ouvidoriaResponsavelNumber[0]}-${ouvidoriaResponsavelNumber.slice(1)}`, selectedMember)

        await interaction.channel?.send({
            content: `${icon.action_check} Membro ${selectedMember} adicionado ao atendimento. Responsável: ${interaction.user}`
        })
    },
});