import IRequest from '../../core/interface/IRequest';
export default class FederationRequest implements IRequest {
    private requestId;
    private contextStack;
    private originalUserId;
    private userId;
    private policyDocument;
    private timeOffset;
    private timeOffsetToken;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getOriginalUserId(): string | null;
    setOriginalUserId(originalUserId: string | null): this;
    withOriginalUserId(originalUserId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getPolicyDocument(): string | null;
    setPolicyDocument(policyDocument: string | null): this;
    withPolicyDocument(policyDocument: string | null): this;
    getTimeOffset(): number | null;
    setTimeOffset(timeOffset: number | null): this;
    withTimeOffset(timeOffset: number | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FederationRequest;
    toDict(): {
        [key: string]: any;
    };
}
