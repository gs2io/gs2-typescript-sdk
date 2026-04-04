import IModel from '../../core/interface/IModel';
export default class Dashboard implements IModel {
    private dashboardId;
    private name;
    private displayName;
    private description;
    private payload;
    private createdAt;
    private updatedAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getDashboardName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, dashboardName: string | null): string | null;
    getDashboardId(): string | null;
    setDashboardId(dashboardId: string | null): this;
    withDashboardId(dashboardId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDisplayName(): string | null;
    setDisplayName(displayName: string | null): this;
    withDisplayName(displayName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getPayload(): string | null;
    setPayload(payload: string | null): this;
    withPayload(payload: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Dashboard | null;
    toDict(): {
        [key: string]: any;
    };
}
