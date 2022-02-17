import IModel from '../../core/interface/IModel';
export default class Mutex implements IModel {
    private mutexId;
    private userId;
    private propertyId;
    private transactionId;
    private createdAt;
    getMutexId(): string | null;
    setMutexId(mutexId: string | null): this;
    withMutexId(mutexId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Mutex | null;
    toDict(): {
        [key: string]: any;
    };
}
