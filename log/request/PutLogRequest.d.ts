import IRequest from '../../core/interface/IRequest';
export default class PutLogRequest implements IRequest {
    private requestId;
    private contextStack;
    private loggingNamespaceId;
    private logCategory;
    private payload;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getLoggingNamespaceId(): string | null;
    setLoggingNamespaceId(loggingNamespaceId: string | null): this;
    withLoggingNamespaceId(loggingNamespaceId: string | null): this;
    getLogCategory(): string | null;
    setLogCategory(logCategory: string | null): this;
    withLogCategory(logCategory: string | null): this;
    getPayload(): string | null;
    setPayload(payload: string | null): this;
    withPayload(payload: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PutLogRequest;
    toDict(): {
        [key: string]: any;
    };
}
