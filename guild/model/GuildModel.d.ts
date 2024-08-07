import IModel from '../../core/interface/IModel';
import RoleModel from './RoleModel';
export default class GuildModel implements IModel {
    private guildModelId;
    private name;
    private metadata;
    private defaultMaximumMemberCount;
    private maximumMemberCount;
    private inactivityPeriodDays;
    private roles;
    private guildMasterRole;
    private guildMemberDefaultRole;
    private rejoinCoolTimeMinutes;
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
    getRoles(): RoleModel[] | null;
    setRoles(roles: RoleModel[] | null): this;
    withRoles(roles: RoleModel[] | null): this;
    getGuildMasterRole(): string | null;
    setGuildMasterRole(guildMasterRole: string | null): this;
    withGuildMasterRole(guildMasterRole: string | null): this;
    getGuildMemberDefaultRole(): string | null;
    setGuildMemberDefaultRole(guildMemberDefaultRole: string | null): this;
    withGuildMemberDefaultRole(guildMemberDefaultRole: string | null): this;
    getRejoinCoolTimeMinutes(): number | null;
    setRejoinCoolTimeMinutes(rejoinCoolTimeMinutes: number | null): this;
    withRejoinCoolTimeMinutes(rejoinCoolTimeMinutes: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GuildModel | null;
    toDict(): {
        [key: string]: any;
    };
}
