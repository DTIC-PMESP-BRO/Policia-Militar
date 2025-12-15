import { createEvent } from "#base";
import { commandPrefixLog } from "../../../../functions/utils/commandslogs.js";
import { icon } from "../../../../functions/utils/emojis.js";

createEvent({
    name: "botinfoPrefixCommand",
    event: "messageCreate",
    async run(message) {
        if (!message.content.startsWith("!botinfo")) return;

        await commandPrefixLog(message);

        const args = message.content.split(/\s+/).slice(1);

        if (args.includes("--version")) {
            await message.channel.send({
                content: `${icon.clipboard} Atualmente estou na versão **${constants.botinfo.version}**`
            });
            return;
        } else if (args.includes("--devs")) {
            await message.channel.send({
                content: `${icon.user_users} Esses são meus desenvolvedores: **${constants.botinfo.devs}**`
            });
            return;
        } else if (args.includes("--base")) {
            await message.channel.send({
                content: `${icon.user_users} Eu uso a ${constants.botinfo.base} como base.`
            });
            return;
        } else if (args.includes("--show-easteregg")) {
            await message.channel.send({
                content: constants.botinfo.easteregg
            });
            return;
        }

        await message.channel.send({
            content: constants.botinfo.description
        });
    }
});
