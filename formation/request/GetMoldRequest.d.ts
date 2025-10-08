import IRequest from '../../core/interface/IRequest';
export default class GetMoldRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private moldModelName;
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
    getMoldModelName(): string | null;
    setMoldModelName(moldModelName: string | null): this;
    withMoldModelName(moldModelName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMoldRequest;
    toDict(): {
        [key: string]: any;
    };
}
