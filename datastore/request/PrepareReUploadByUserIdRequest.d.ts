import IRequest from '../../core/interface/IRequest';
export default class PrepareReUploadByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private dataObjectName;
    private userId;
    private contentType;
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
    getDataObjectName(): string | null;
    setDataObjectName(dataObjectName: string | null): this;
    withDataObjectName(dataObjectName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getContentType(): string | null;
    setContentType(contentType: string | null): this;
    withContentType(contentType: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PrepareReUploadByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
