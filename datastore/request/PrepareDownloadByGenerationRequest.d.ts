import IRequest from '../../core/interface/IRequest';
export default class PrepareDownloadByGenerationRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private dataObjectId;
    private generation;
    private duplicationAvoider;
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
    getDataObjectId(): string | null;
    setDataObjectId(dataObjectId: string | null): this;
    withDataObjectId(dataObjectId: string | null): this;
    getGeneration(): string | null;
    setGeneration(generation: string | null): this;
    withGeneration(generation: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PrepareDownloadByGenerationRequest;
    toDict(): {
        [key: string]: any;
    };
}
