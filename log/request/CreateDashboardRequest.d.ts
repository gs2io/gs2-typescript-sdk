import IRequest from '../../core/interface/IRequest';
export default class CreateDashboardRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private displayName;
    private description;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getDisplayName(): string | null;
    setDisplayName(displayName: string | null): this;
    withDisplayName(displayName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateDashboardRequest;
    toDict(): {
        [key: string]: any;
    };
}
