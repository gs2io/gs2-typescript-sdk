import IRequest from '../../core/interface/IRequest';
export default class GetLikeRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private entryModelName;
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
    getEntryModelName(): string | null;
    setEntryModelName(entryModelName: string | null): this;
    withEntryModelName(entryModelName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetLikeRequest;
    toDict(): {
        [key: string]: any;
    };
}
