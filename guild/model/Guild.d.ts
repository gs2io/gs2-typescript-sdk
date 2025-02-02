import IModel from '../../core/interface/IModel';
import * as Gs2Guild from '../../guild/model';
export default class Guild implements IModel {
    private guildId;
    private guildModelName;
    private name;
    private displayName;
    private attribute1;
    private attribute2;
    private attribute3;
    private attribute4;
    private attribute5;
    private metadata;
    private joinPolicy;
    private customRoles;
    private guildMemberDefaultRole;
    private currentMaximumMemberCount;
    private members;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getGuildModelName(grn: string): string | null;
    static getGuildName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, guildModelName: string | null, guildName: string | null): string | null;
    getGuildId(): string | null;
    setGuildId(guildId: string | null): this;
    withGuildId(guildId: string | null): this;
    getGuildModelName(): string | null;
    setGuildModelName(guildModelName: string | null): this;
    withGuildModelName(guildModelName: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDisplayName(): string | null;
    setDisplayName(displayName: string | null): this;
    withDisplayName(displayName: string | null): this;
    getAttribute1(): number | null;
    setAttribute1(attribute1: number | null): this;
    withAttribute1(attribute1: number | null): this;
    getAttribute2(): number | null;
    setAttribute2(attribute2: number | null): this;
    withAttribute2(attribute2: number | null): this;
    getAttribute3(): number | null;
    setAttribute3(attribute3: number | null): this;
    withAttribute3(attribute3: number | null): this;
    getAttribute4(): number | null;
    setAttribute4(attribute4: number | null): this;
    withAttribute4(attribute4: number | null): this;
    getAttribute5(): number | null;
    setAttribute5(attribute5: number | null): this;
    withAttribute5(attribute5: number | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getJoinPolicy(): string | null;
    setJoinPolicy(joinPolicy: string | null): this;
    withJoinPolicy(joinPolicy: string | null): this;
    getCustomRoles(): Gs2Guild.RoleModel[] | null;
    setCustomRoles(customRoles: Gs2Guild.RoleModel[] | null): this;
    withCustomRoles(customRoles: Gs2Guild.RoleModel[] | null): this;
    getGuildMemberDefaultRole(): string | null;
    setGuildMemberDefaultRole(guildMemberDefaultRole: string | null): this;
    withGuildMemberDefaultRole(guildMemberDefaultRole: string | null): this;
    getCurrentMaximumMemberCount(): number | null;
    setCurrentMaximumMemberCount(currentMaximumMemberCount: number | null): this;
    withCurrentMaximumMemberCount(currentMaximumMemberCount: number | null): this;
    getMembers(): Gs2Guild.Member[] | null;
    setMembers(members: Gs2Guild.Member[] | null): this;
    withMembers(members: Gs2Guild.Member[] | null): this;
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
    }): Guild | null;
    toDict(): {
        [key: string]: any;
    };
}
