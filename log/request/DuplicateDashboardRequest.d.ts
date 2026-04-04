import IRequest from '../../core/interface/IRequest';
export default class DuplicateDashboardRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private dashboardName;
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
    static fromDict(data: {
        [key: string]: any;
    }): DuplicateDashboardRequest;
    toDict(): {
        [key: string]: any;
    };
}
