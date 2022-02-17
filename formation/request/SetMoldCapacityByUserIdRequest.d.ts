import IRequest from '../../core/interface/IRequest';
export default class SetMoldCapacityByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private moldName;
    private capacity;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getMoldName(): string | null;
    setMoldName(moldName: string | null): this;
    withMoldName(moldName: string | null): this;
    getCapacity(): number | null;
    setCapacity(capacity: number | null): this;
    withCapacity(capacity: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetMoldCapacityByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
