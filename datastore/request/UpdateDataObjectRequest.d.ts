import IRequest from '../../core/interface/IRequest';
export default class UpdateDataObjectRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private dataObjectName;
    private accessToken;
    private scope;
    private allowUserIds;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getScope(): string | null;
    setScope(scope: string | null): this;
    withScope(scope: string | null): this;
    getAllowUserIds(): string[] | null;
    setAllowUserIds(allowUserIds: string[] | null): this;
    withAllowUserIds(allowUserIds: string[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateDataObjectRequest;
    toDict(): {
        [key: string]: any;
    };
}
