import IModel from '../../core/interface/IModel';
export default class Trigger implements IModel {
    private triggerId;
    private name;
    private userId;
    private createdAt;
    private expiresAt;
    getTriggerId(): string | null;
    setTriggerId(triggerId: string | null): this;
    withTriggerId(triggerId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getExpiresAt(): number | null;
    setExpiresAt(expiresAt: number | null): this;
    withExpiresAt(expiresAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Trigger | null;
    toDict(): {
        [key: string]: any;
    };
}
