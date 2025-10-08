import IRequest from '../../core/interface/IRequest';
export default class GetRateModelRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private rateName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getRateName(): string | null;
    setRateName(rateName: string | null): this;
    withRateName(rateName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetRateModelRequest;
    toDict(): {
        [key: string]: any;
    };
}
