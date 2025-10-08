import IRequest from '../../core/interface/IRequest';
export default class GetSalesItemMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private salesItemName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getSalesItemName(): string | null;
    setSalesItemName(salesItemName: string | null): this;
    withSalesItemName(salesItemName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetSalesItemMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
