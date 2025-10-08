import IRequest from '../../core/interface/IRequest';
export default class GetThresholdMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private thresholdName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getThresholdName(): string | null;
    setThresholdName(thresholdName: string | null): this;
    withThresholdName(thresholdName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetThresholdMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
