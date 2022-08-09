import IModel from '../../core/interface/IModel';
export default class Insight implements IModel {
    private insightId;
    private name;
    private taskId;
    private host;
    private password;
    private status;
    private createdAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getInsightName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, insightName: string | null): string | null;
    getInsightId(): string | null;
    setInsightId(insightId: string | null): this;
    withInsightId(insightId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getTaskId(): string | null;
    setTaskId(taskId: string | null): this;
    withTaskId(taskId: string | null): this;
    getHost(): string | null;
    setHost(host: string | null): this;
    withHost(host: string | null): this;
    getPassword(): string | null;
    setPassword(password: string | null): this;
    withPassword(password: string | null): this;
    getStatus(): string | null;
    setStatus(status: string | null): this;
    withStatus(status: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Insight | null;
    toDict(): {
        [key: string]: any;
    };
}
