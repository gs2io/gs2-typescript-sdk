import IRequest from '../../core/interface/IRequest';
export default class DeleteAreaModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private areaModelName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getAreaModelName(): string | null;
    setAreaModelName(areaModelName: string | null): this;
    withAreaModelName(areaModelName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteAreaModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
