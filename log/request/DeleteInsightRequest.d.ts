import IRequest from '../../core/interface/IRequest';
export default class DeleteInsightRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private insightName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getInsightName(): string | null;
    setInsightName(insightName: string | null): this;
    withInsightName(insightName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteInsightRequest;
    toDict(): {
        [key: string]: any;
    };
}
