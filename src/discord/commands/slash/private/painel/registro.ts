import { AttachmentBuilder, ChatInputCommandInteraction } from "discord.js";
import { icon } from "../../../../../functions/utils/emojis.js";
import { registroSendContainer } from "../../../../containers/commands/slash/private/registro.send.js";

export default {
    async run(interaction: ChatInputCommandInteraction<"cached">) {
        if (interaction.options.getSubcommand() !== "enviar") return;

        const registroestatisticoChannel = await interaction.guild.channels.fetch(dbchannels.channels_ids.registroestatisticoChannelId);
        if (!registroestatisticoChannel?.isTextBased()) return;

        const filenames = ["BannerPMESP_Registro_Estatistico"];

        const files = filenames.map(name => new AttachmentBuilder(
            `./src/assets/images/${name}.png`,
            { name: `${name}.png` }
        ))

        await registroestatisticoChannel.send({
            flags: ["IsComponentsV2"],
            components: [registroSendContainer()],
            files: files,
            allowedMentions: { parse: [] }
        })

        await interaction.reply({
            flags: ["Ephemeral"],
            content: `${icon.action_check} Container enviado com sucesso.`
        })
    }
};
