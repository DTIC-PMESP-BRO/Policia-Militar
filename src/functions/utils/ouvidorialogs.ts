import { GuildMember } from "discord.js";
import { ouvidoriaAddMemberLogContainer } from "../../discord/containers/logs/ouvidoria/ouvidoriaAddMember.log.js";
import { ouvidoriaArquiveLogContainer } from "../../discord/containers/logs/ouvidoria/ouvidoriaArquive.log.js";
import { ouvidoriaLockLogContainer } from "../../discord/containers/logs/ouvidoria/ouvidoriaLock.log.js";
import { ouvidoriaOpenLogContainer } from "../../discord/containers/logs/ouvidoria/ouvidoriaOpen.log.js";

export async function ouvidoriaOpenLog(member: GuildMember, identificador: string) {
    const channellog = await member.guild?.channels.fetch(dbchannels.channels_ids.ouvidorialogsChannelId);
    if (!channellog?.isTextBased()) return;

    await channellog.send({
        flags: ["IsComponentsV2"],
        components: [ouvidoriaOpenLogContainer(member, identificador)],
        allowedMentions: { parse: [] }
    });
}

export async function ouvidoriaLockLog(member: GuildMember, identificador: string) {
    const channellog = await member.guild?.channels.fetch(dbchannels.channels_ids.ouvidorialogsChannelId);
    if (!channellog?.isTextBased()) return;

    await channellog.send({
        flags: ["IsComponentsV2"],
        components: [ouvidoriaLockLogContainer(member, identificador)],
        allowedMentions: { parse: [] }
    });
}

export async function ouvidoriaArquiveLog(member: GuildMember, identificador: string) {
    const channellog = await member.guild?.channels.fetch(dbchannels.channels_ids.ouvidorialogsChannelId);
    if (!channellog?.isTextBased()) return;

    await channellog.send({
        flags: ["IsComponentsV2"],
        components: [ouvidoriaArquiveLogContainer(member, identificador)],
        allowedMentions: { parse: [] }
    });
}

export async function ouvidoriaAddMemberLog(member: GuildMember, identificador: string, memberAdd: GuildMember) {
    const channellog = await member.guild?.channels.fetch(dbchannels.channels_ids.ouvidorialogsChannelId);
    if (!channellog?.isTextBased()) return;

    await channellog.send({
        flags: ["IsComponentsV2"],
        components: [ouvidoriaAddMemberLogContainer(member, identificador, memberAdd)],
        allowedMentions: { parse: [] }
    });
}