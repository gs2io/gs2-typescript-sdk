import IRequest from '../../core/interface/IRequest';
export default class RestoreDataObjectRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private dataObjectId;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getDataObjectId(): string | null;
    setDataObjectId(dataObjectId: string | null): this;
    withDataObjectId(dataObjectId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RestoreDataObjectRequest;
    toDict(): {
        [key: string]: any;
    };
}
