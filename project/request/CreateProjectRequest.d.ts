import IRequest from '../../core/interface/IRequest';
export default class CreateProjectRequest implements IRequest {
    private requestId;
    private contextStack;
    private accountToken;
    private name;
    private description;
    private plan;
    private billingMethodName;
    private enableEventBridge;
    private eventBridgeAwsAccountId;
    private eventBridgeAwsRegion;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getAccountToken(): string | null;
    setAccountToken(accountToken: string | null): this;
    withAccountToken(accountToken: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getPlan(): string | null;
    setPlan(plan: string | null): this;
    withPlan(plan: string | null): this;
    getBillingMethodName(): string | null;
    setBillingMethodName(billingMethodName: string | null): this;
    withBillingMethodName(billingMethodName: string | null): this;
    getEnableEventBridge(): string | null;
    setEnableEventBridge(enableEventBridge: string | null): this;
    withEnableEventBridge(enableEventBridge: string | null): this;
    getEventBridgeAwsAccountId(): string | null;
    setEventBridgeAwsAccountId(eventBridgeAwsAccountId: string | null): this;
    withEventBridgeAwsAccountId(eventBridgeAwsAccountId: string | null): this;
    getEventBridgeAwsRegion(): string | null;
    setEventBridgeAwsRegion(eventBridgeAwsRegion: string | null): this;
    withEventBridgeAwsRegion(eventBridgeAwsRegion: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateProjectRequest;
    toDict(): {
        [key: string]: any;
    };
}
