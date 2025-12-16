import { AttachmentBuilder, ChatInputCommandInteraction } from "discord.js";
import { icon } from "../../../../../functions/utils/emojis.js";
import { ouvidoriaSendContainer } from "../../../../containers/commands/slash/private/ouvidoria/ouvidoria.send.js";

export default {
    async run(interaction: ChatInputCommandInteraction<"cached">) {
        if (interaction.options.getSubcommand() !== "ouvidoria") return;

        const suporteChannel = await interaction.guild.channels.fetch(dbchannels.channels_ids.ouvidoriaChannelId);

        if (!suporteChannel) {
            console.log("Canal Não Encontrado");
            return;
        };

        const filenames = ["BannerPMESP_Painel_Ouvidoria"];

        const files = filenames.map(name => new AttachmentBuilder(
            `./src/assets/images/${name}.png`,
            { name: `${name}.png` }
        ))

        if (suporteChannel.isTextBased()) {
            await suporteChannel.send({
                flags: ["IsComponentsV2"],
                components: [ouvidoriaSendContainer()],
                files: files,
                allowedMentions: { parse: [] }
            });
        };

        await interaction.reply({
            flags: ["Ephemeral"],
            content: `${icon.action_check} Painel Enviado Com Sucesso.`
        })
    }
};
