import IModel from '../../core/interface/IModel';
export default class IssueJob implements IModel {
    private issueJobId;
    private name;
    private metadata;
    private issuedCount;
    private issueRequestCount;
    private status;
    private createdAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getCampaignModelName(grn: string): string | null;
    static getIssueJobName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, campaignModelName: string | null, issueJobName: string | null): string | null;
    getIssueJobId(): string | null;
    setIssueJobId(issueJobId: string | null): this;
    withIssueJobId(issueJobId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getIssuedCount(): number | null;
    setIssuedCount(issuedCount: number | null): this;
    withIssuedCount(issuedCount: number | null): this;
    getIssueRequestCount(): number | null;
    setIssueRequestCount(issueRequestCount: number | null): this;
    withIssueRequestCount(issueRequestCount: number | null): this;
    getStatus(): string | null;
    setStatus(status: string | null): this;
    withStatus(status: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IssueJob | null;
    toDict(): {
        [key: string]: any;
    };
}
