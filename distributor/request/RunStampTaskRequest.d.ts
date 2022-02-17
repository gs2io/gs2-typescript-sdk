import IRequest from '../../core/interface/IRequest';
export default class RunStampTaskRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private stampTask;
    private keyId;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getStampTask(): string | null;
    setStampTask(stampTask: string | null): this;
    withStampTask(stampTask: string | null): this;
    getKeyId(): string | null;
    setKeyId(keyId: string | null): this;
    withKeyId(keyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RunStampTaskRequest;
    toDict(): {
        [key: string]: any;
    };
}
