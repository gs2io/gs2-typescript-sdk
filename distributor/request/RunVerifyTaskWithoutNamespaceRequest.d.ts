import IRequest from '../../core/interface/IRequest';
export default class RunVerifyTaskWithoutNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private verifyTask;
    private keyId;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getVerifyTask(): string | null;
    setVerifyTask(verifyTask: string | null): this;
    withVerifyTask(verifyTask: string | null): this;
    getKeyId(): string | null;
    setKeyId(keyId: string | null): this;
    withKeyId(keyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RunVerifyTaskWithoutNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
