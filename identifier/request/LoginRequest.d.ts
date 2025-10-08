import IRequest from '../../core/interface/IRequest';
export default class LoginRequest implements IRequest {
    private requestId;
    private contextStack;
    private clientId;
    private clientSecret;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getClientId(): string | null;
    setClientId(clientId: string | null): this;
    withClientId(clientId: string | null): this;
    getClientSecret(): string | null;
    setClientSecret(clientSecret: string | null): this;
    withClientSecret(clientSecret: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LoginRequest;
    toDict(): {
        [key: string]: any;
    };
}
