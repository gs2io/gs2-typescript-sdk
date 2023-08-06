import IModel from '../../core/interface/IModel';
export default class Entry implements IModel {
    private entryId;
    private userId;
    private name;
    private acquiredAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getEntryName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, entryName: string | null): string | null;
    getEntryId(): string | null;
    setEntryId(entryId: string | null): this;
    withEntryId(entryId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getAcquiredAt(): number | null;
    setAcquiredAt(acquiredAt: number | null): this;
    withAcquiredAt(acquiredAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Entry | null;
    toDict(): {
        [key: string]: any;
    };
}
