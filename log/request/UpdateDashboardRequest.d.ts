import IRequest from '../../core/interface/IRequest';
export default class UpdateDashboardRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private dashboardName;
    private displayName;
    private description;
    private payload;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getDashboardName(): string | null;
    setDashboardName(dashboardName: string | null): this;
    withDashboardName(dashboardName: string | null): this;
    getDisplayName(): string | null;
    setDisplayName(displayName: string | null): this;
    withDisplayName(displayName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getPayload(): string | null;
    setPayload(payload: string | null): this;
    withPayload(payload: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateDashboardRequest;
    toDict(): {
        [key: string]: any;
    };
}
