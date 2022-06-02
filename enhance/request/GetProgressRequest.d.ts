import IRequest from '../../core/interface/IRequest';
export default class GetProgressRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private rateName;
    private progressName;
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
    getRateName(): string | null;
    setRateName(rateName: string | null): this;
    withRateName(rateName: string | null): this;
    getProgressName(): string | null;
    setProgressName(progressName: string | null): this;
    withProgressName(progressName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetProgressRequest;
    toDict(): {
        [key: string]: any;
    };
}
