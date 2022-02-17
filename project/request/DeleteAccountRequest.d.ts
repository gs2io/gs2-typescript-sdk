import IRequest from '../../core/interface/IRequest';
export default class DeleteAccountRequest implements IRequest {
    private requestId;
    private contextStack;
    private accountToken;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getAccountToken(): string | null;
    setAccountToken(accountToken: string | null): this;
    withAccountToken(accountToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteAccountRequest;
    toDict(): {
        [key: string]: any;
    };
}
