import IModel from '../../core/interface/IModel';
export default class Mold implements IModel {
    private moldId;
    private name;
    private userId;
    private capacity;
    private createdAt;
    private updatedAt;
    getMoldId(): string | null;
    setMoldId(moldId: string | null): this;
    withMoldId(moldId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getCapacity(): number | null;
    setCapacity(capacity: number | null): this;
    withCapacity(capacity: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Mold | null;
    toDict(): {
        [key: string]: any;
    };
}
