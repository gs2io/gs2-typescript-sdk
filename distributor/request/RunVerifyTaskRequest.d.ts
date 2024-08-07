import IRequest from '../../core/interface/IRequest';
export default class RunVerifyTaskRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private verifyTask;
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
    getVerifyTask(): string | null;
    setVerifyTask(verifyTask: string | null): this;
    withVerifyTask(verifyTask: string | null): this;
    getKeyId(): string | null;
    setKeyId(keyId: string | null): this;
    withKeyId(keyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RunVerifyTaskRequest;
    toDict(): {
        [key: string]: any;
    };
}
