import IRequest from '../../core/interface/IRequest';
export default class CreateRatingModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private name;
    private description;
    private metadata;
    private initialValue;
    private volatility;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getInitialValue(): number | null;
    setInitialValue(initialValue: number | null): this;
    withInitialValue(initialValue: number | null): this;
    getVolatility(): number | null;
    setVolatility(volatility: number | null): this;
    withVolatility(volatility: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateRatingModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
