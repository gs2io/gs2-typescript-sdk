import IRequest from '../../core/interface/IRequest';
export default class UseRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private code;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getCode(): string | null;
    setCode(code: string | null): this;
    withCode(code: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UseRequest;
    toDict(): {
        [key: string]: any;
    };
}
