import IRequest from '@/gs2/core/interface/IRequest';
export declare class VerifyRequest implements IRequest {
    private requestId;
    private contextStack;
    private verifyToken;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getVerifyToken(): string | null;
    setVerifyToken(verifyToken: string | null): this;
    withVerifyToken(verifyToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyRequest;
    toDict(): {
        [key: string]: any;
    };
}
