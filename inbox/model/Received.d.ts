import IModel from '../../core/interface/IModel';
export default class Received implements IModel {
    private receivedId;
    private userId;
    private receivedGlobalMessageNames;
    private createdAt;
    private updatedAt;
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
    static fromDict(data: {
        [key: string]: any;
    }): Received | null;
    toDict(): {
        [key: string]: any;
    };
}
