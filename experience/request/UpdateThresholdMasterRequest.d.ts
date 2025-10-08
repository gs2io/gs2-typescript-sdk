import IRequest from '../../core/interface/IRequest';
export default class UpdateThresholdMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private thresholdName;
    private description;
    private metadata;
    private values;
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
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getValues(): number[] | null;
    setValues(values: number[] | null): this;
    withValues(values: number[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateThresholdMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
