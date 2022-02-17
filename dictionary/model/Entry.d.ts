import IModel from '../../core/interface/IModel';
export default class Entry implements IModel {
    private entryId;
    private userId;
    private name;
    private acquiredAt;
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
