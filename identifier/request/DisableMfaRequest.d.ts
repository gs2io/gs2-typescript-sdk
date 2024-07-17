import IRequest from '../../core/interface/IRequest';
export default class DisableMfaRequest implements IRequest {
    private requestId;
    private contextStack;
    private userName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getUserName(): string | null;
    setUserName(userName: string | null): this;
    withUserName(userName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DisableMfaRequest;
    toDict(): {
        [key: string]: any;
    };
}
