import IRequest from '../../core/interface/IRequest';
export default class VerifyRankCapByStampTaskRequest implements IRequest {
    private requestId;
    private contextStack;
    private stampTask;
    private keyId;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getStampTask(): string | null;
    setStampTask(stampTask: string | null): this;
    withStampTask(stampTask: string | null): this;
    getKeyId(): string | null;
    setKeyId(keyId: string | null): this;
    withKeyId(keyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyRankCapByStampTaskRequest;
    toDict(): {
        [key: string]: any;
    };
}
