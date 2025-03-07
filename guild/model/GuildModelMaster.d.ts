import IModel from '../../core/interface/IModel';
import * as Gs2Guild from '../../guild/model';
export default class GuildModelMaster implements IModel {
    private guildModelId;
    private name;
    private description;
    private metadata;
    private defaultMaximumMemberCount;
    private maximumMemberCount;
    private inactivityPeriodDays;
    private roles;
    private guildMasterRole;
    private guildMemberDefaultRole;
    private rejoinCoolTimeMinutes;
    private maxConcurrentJoinGuilds;
    private maxConcurrentGuildMasterCount;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getGuildModelName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, guildModelName: string | null): string | null;
    getGuildModelId(): string | null;
    setGuildModelId(guildModelId: string | null): this;
    withGuildModelId(guildModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getDefaultMaximumMemberCount(): number | null;
    setDefaultMaximumMemberCount(defaultMaximumMemberCount: number | null): this;
    withDefaultMaximumMemberCount(defaultMaximumMemberCount: number | null): this;
    getMaximumMemberCount(): number | null;
    setMaximumMemberCount(maximumMemberCount: number | null): this;
    withMaximumMemberCount(maximumMemberCount: number | null): this;
    getInactivityPeriodDays(): number | null;
    setInactivityPeriodDays(inactivityPeriodDays: number | null): this;
    withInactivityPeriodDays(inactivityPeriodDays: number | null): this;
    getRoles(): Gs2Guild.RoleModel[] | null;
    setRoles(roles: Gs2Guild.RoleModel[] | null): this;
    withRoles(roles: Gs2Guild.RoleModel[] | null): this;
    getGuildMasterRole(): string | null;
    setGuildMasterRole(guildMasterRole: string | null): this;
    withGuildMasterRole(guildMasterRole: string | null): this;
    getGuildMemberDefaultRole(): string | null;
    setGuildMemberDefaultRole(guildMemberDefaultRole: string | null): this;
    withGuildMemberDefaultRole(guildMemberDefaultRole: string | null): this;
    getRejoinCoolTimeMinutes(): number | null;
    setRejoinCoolTimeMinutes(rejoinCoolTimeMinutes: number | null): this;
    withRejoinCoolTimeMinutes(rejoinCoolTimeMinutes: number | null): this;
    getMaxConcurrentJoinGuilds(): number | null;
    setMaxConcurrentJoinGuilds(maxConcurrentJoinGuilds: number | null): this;
    withMaxConcurrentJoinGuilds(maxConcurrentJoinGuilds: number | null): this;
    getMaxConcurrentGuildMasterCount(): number | null;
    setMaxConcurrentGuildMasterCount(maxConcurrentGuildMasterCount: number | null): this;
    withMaxConcurrentGuildMasterCount(maxConcurrentGuildMasterCount: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GuildModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
