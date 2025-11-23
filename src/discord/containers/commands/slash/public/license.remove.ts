import { brBuilder, createContainer, createSection, createTextDisplay, Separator } from "@magicyan/discord";
import { GuildMember, time, TimestampStyles } from "discord.js";
import { icon } from "../../../../../functions/utils/emojis.js";
import { getOuvidoriaDPRoleId } from "../../../../../functions/utils/dbrolesget.js";

export async function licenseRemoveContainer(member: GuildMember) {
    return createContainer({
        components: [
            createSection(
                brBuilder(
                    `${icon.calendar_remove}  Licença Encerrada`,
                    `${icon.clock} ${time(new Date(), TimestampStyles.LongDateShortTime)}`,
                    `${icon.user} ${member.user} (${member.id})`,
                    `${icon.arrow_right} <@${await getOuvidoriaDPRoleId}>`
                ),
                {
                    media: {
                        url: member.displayAvatarURL()
                    },
                    description: `Foto de perfil de ${member.user.username}`
                }
            ),
            Separator.Large,
            createTextDisplay(
                brBuilder(
                    `**${icon.clipboard} Status**`,
                    "Licença encerrada pelo próprio militar.",
                )
            )
        ]
    });
}
