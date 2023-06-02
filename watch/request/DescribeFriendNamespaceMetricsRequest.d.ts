import IRequest from '../../core/interface/IRequest';
export default class DescribeFriendNamespaceMetricsRequest implements IRequest {
    private requestId;
    private contextStack;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeFriendNamespaceMetricsRequest;
    toDict(): {
        [key: string]: any;
    };
}
