import IModel from '../../core/interface/IModel';
export default class Received implements IModel {
    private receivedId;
    private userId;
    private receivedGlobalMessageNames;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null): string | null;
    getReceivedId(): string | null;
    setReceivedId(receivedId: string | null): this;
    withReceivedId(receivedId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getReceivedGlobalMessageNames(): string[] | null;
    setReceivedGlobalMessageNames(receivedGlobalMessageNames: string[] | null): this;
    withReceivedGlobalMessageNames(receivedGlobalMessageNames: string[] | null): this;
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
    }): Received | null;
    toDict(): {
        [key: string]: any;
    };
}
