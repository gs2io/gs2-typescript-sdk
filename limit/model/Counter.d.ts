import IModel from '../../core/interface/IModel';
export default class Counter implements IModel {
    private counterId;
    private limitName;
    private name;
    private userId;
    private count;
    private nextResetAt;
    private createdAt;
    private updatedAt;
    getCounterId(): string | null;
    setCounterId(counterId: string | null): this;
    withCounterId(counterId: string | null): this;
    getLimitName(): string | null;
    setLimitName(limitName: string | null): this;
    withLimitName(limitName: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    getNextResetAt(): number | null;
    setNextResetAt(nextResetAt: number | null): this;
    withNextResetAt(nextResetAt: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Counter | null;
    toDict(): {
        [key: string]: any;
    };
}
