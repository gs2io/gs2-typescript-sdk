import IRequest from '../../core/interface/IRequest';
export default class DescribeExperienceStatusMetricsRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private experienceName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getExperienceName(): string | null;
    setExperienceName(experienceName: string | null): this;
    withExperienceName(experienceName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeExperienceStatusMetricsRequest;
    toDict(): {
        [key: string]: any;
    };
}
