import IRequest from '../../core/interface/IRequest';
export default class PrepareReUploadRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private dataObjectName;
    private accessToken;
    private contentType;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getDataObjectName(): string | null;
    setDataObjectName(dataObjectName: string | null): this;
    withDataObjectName(dataObjectName: string | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getContentType(): string | null;
    setContentType(contentType: string | null): this;
    withContentType(contentType: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PrepareReUploadRequest;
    toDict(): {
        [key: string]: any;
    };
}
