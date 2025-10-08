import IModel from '../../core/interface/IModel';
export default class JoinedGuild implements IModel {
    private joinedGuildId;
    private guildModelName;
    private guildName;
    private userId;
    private createdAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getGuildModelName(grn: string): string | null;
    static getGuildName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, guildModelName: string | null, guildName: string | null): string | null;
    getJoinedGuildId(): string | null;
    setJoinedGuildId(joinedGuildId: string | null): this;
    withJoinedGuildId(joinedGuildId: string | null): this;
    getGuildModelName(): string | null;
    setGuildModelName(guildModelName: string | null): this;
    withGuildModelName(guildModelName: string | null): this;
    getGuildName(): string | null;
    setGuildName(guildName: string | null): this;
    withGuildName(guildName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): JoinedGuild | null;
    toDict(): {
        [key: string]: any;
    };
}
