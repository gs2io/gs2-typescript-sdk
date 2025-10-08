import IRequest from '../../core/interface/IRequest';
export default class ArchiveDumpUserDataRequest implements IRequest {
    private requestId;
    private contextStack;
    private ownerId;
    private transactionId;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getOwnerId(): string | null;
    setOwnerId(ownerId: string | null): this;
    withOwnerId(ownerId: string | null): this;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ArchiveDumpUserDataRequest;
    toDict(): {
        [key: string]: any;
    };
}
