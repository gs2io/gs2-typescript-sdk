import IModel from '../../core/interface/IModel';
export default class CleanProgress implements IModel {
    private cleanProgressId;
    private transactionId;
    private userId;
    private cleaned;
    private microserviceCount;
    private createdAt;
    private updatedAt;
    private revision;
    static getAccountName(grn: string): string | null;
    static getProjectName(grn: string): string | null;
    static getTransactionId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(accountName: string | null, projectName: string | null, transactionId: string | null): string | null;
    getCleanProgressId(): string | null;
    setCleanProgressId(cleanProgressId: string | null): this;
    withCleanProgressId(cleanProgressId: string | null): this;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getCleaned(): number | null;
    setCleaned(cleaned: number | null): this;
    withCleaned(cleaned: number | null): this;
    getMicroserviceCount(): number | null;
    setMicroserviceCount(microserviceCount: number | null): this;
    withMicroserviceCount(microserviceCount: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CleanProgress | null;
    toDict(): {
        [key: string]: any;
    };
}
