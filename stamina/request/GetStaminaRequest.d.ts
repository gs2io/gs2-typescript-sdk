import IRequest from '../../core/interface/IRequest';
export default class GetStaminaRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private staminaName;
    private accessToken;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getStaminaName(): string | null;
    setStaminaName(staminaName: string | null): this;
    withStaminaName(staminaName: string | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStaminaRequest;
    toDict(): {
        [key: string]: any;
    };
}
