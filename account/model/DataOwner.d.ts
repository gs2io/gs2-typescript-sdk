import IModel from '../../core/interface/IModel';
export default class DataOwner implements IModel {
    private dataOwnerId;
    private userId;
    private name;
    private createdAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getDataOwnerName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, dataOwnerName: string | null): string | null;
    getDataOwnerId(): string | null;
    setDataOwnerId(dataOwnerId: string | null): this;
    withDataOwnerId(dataOwnerId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DataOwner | null;
    toDict(): {
        [key: string]: any;
    };
}
