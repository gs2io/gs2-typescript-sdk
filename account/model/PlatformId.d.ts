import IModel from '../../core/interface/IModel';
export default class PlatformId implements IModel {
    private platformId;
    private userId;
    private type;
    private userIdentifier;
    private createdAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getType(grn: string): string | null;
    static getUserIdentifier(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, type: string | null, userIdentifier: string | null): string | null;
    getPlatformId(): string | null;
    setPlatformId(platformId: string | null): this;
    withPlatformId(platformId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getType(): number | null;
    setType(type: number | null): this;
    withType(type: number | null): this;
    getUserIdentifier(): string | null;
    setUserIdentifier(userIdentifier: string | null): this;
    withUserIdentifier(userIdentifier: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PlatformId | null;
    toDict(): {
        [key: string]: any;
    };
}
