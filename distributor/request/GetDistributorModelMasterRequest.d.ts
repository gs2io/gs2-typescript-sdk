import IRequest from '../../core/interface/IRequest';
export default class GetDistributorModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private distributorName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getDistributorName(): string | null;
    setDistributorName(distributorName: string | null): this;
    withDistributorName(distributorName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetDistributorModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
