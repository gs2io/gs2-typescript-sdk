import IRequest from '../../core/interface/IRequest';
export default class GetLimitModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private limitName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getLimitName(): string | null;
    setLimitName(limitName: string | null): this;
    withLimitName(limitName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetLimitModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
