import IRequest from '../../core/interface/IRequest';
export default class GetImportErrorLogRequest implements IRequest {
    private requestId;
    private contextStack;
    private transactionId;
    private errorLogName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getErrorLogName(): string | null;
    setErrorLogName(errorLogName: string | null): this;
    withErrorLogName(errorLogName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetImportErrorLogRequest;
    toDict(): {
        [key: string]: any;
    };
}
