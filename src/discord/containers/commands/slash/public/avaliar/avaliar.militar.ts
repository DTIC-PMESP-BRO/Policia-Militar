import { brBuilder, createContainer, createTextDisplay, Separator } from "@magicyan/discord";
import { icon } from "../../../../../../functions/utils/emojis.js";

export function avaliarMilitarContainer(militar: string, estrelas: string, avaliacao: string) {
    return createContainer({
        components: [
            createTextDisplay(
                brBuilder(
                    `## ${icon.pmesp} Avaliação de Militar`,
                    `${icon.user} ${militar}`,
                    `-# ${estrelas}`
                )
            ),
            Separator.Large,
            createTextDisplay(
                brBuilder(
                    avaliacao
                )
            )
        ]
    });
}
