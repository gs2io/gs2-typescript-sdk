import IRequest from '../../core/interface/IRequest';
export default class DeleteSalesItemGroupMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private salesItemGroupName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getSalesItemGroupName(): string | null;
    setSalesItemGroupName(salesItemGroupName: string | null): this;
    withSalesItemGroupName(salesItemGroupName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteSalesItemGroupMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
