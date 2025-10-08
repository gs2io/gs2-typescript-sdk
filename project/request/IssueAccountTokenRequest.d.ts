import IRequest from '../../core/interface/IRequest';
export default class IssueAccountTokenRequest implements IRequest {
    private requestId;
    private contextStack;
    private accountName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getAccountName(): string | null;
    setAccountName(accountName: string | null): this;
    withAccountName(accountName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IssueAccountTokenRequest;
    toDict(): {
        [key: string]: any;
    };
}
