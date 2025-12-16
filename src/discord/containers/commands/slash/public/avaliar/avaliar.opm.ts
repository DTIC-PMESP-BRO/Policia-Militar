import { brBuilder, createContainer, createTextDisplay, Separator } from "@magicyan/discord";
import { icon } from "../../../../../../functions/utils/emojis.js";

export function avaliarOPMContainer(opm: string, estrelas: string, avaliacao: string) {
    return createContainer({
        components: [
            createTextDisplay(
                brBuilder(
                    `## ${icon.pmesp} Avaliação de OPM`,
                    `${icon.other_bank} ${opm}`,
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
