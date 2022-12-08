import IRequest from '../../core/interface/IRequest';
export default class PrepareDownloadOwnDataByGenerationRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private dataObjectName;
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
    getDataObjectName(): string | null;
    setDataObjectName(dataObjectName: string | null): this;
    withDataObjectName(dataObjectName: string | null): this;
    getGeneration(): string | null;
    setGeneration(generation: string | null): this;
    withGeneration(generation: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PrepareDownloadOwnDataByGenerationRequest;
    toDict(): {
        [key: string]: any;
    };
}
