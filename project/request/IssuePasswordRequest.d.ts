import IRequest from '@/gs2/core/interface/IRequest';
export declare class IssuePasswordRequest implements IRequest {
    private requestId;
    private contextStack;
    private issuePasswordToken;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getIssuePasswordToken(): string | null;
    setIssuePasswordToken(issuePasswordToken: string | null): this;
    withIssuePasswordToken(issuePasswordToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IssuePasswordRequest;
    toDict(): {
        [key: string]: any;
    };
}
