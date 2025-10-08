import IModel from '../../core/interface/IModel';
export default class ImportProgress implements IModel {
    private importProgressId;
    private transactionId;
    private userId;
    private imported;
    private microserviceCount;
    private createdAt;
    private updatedAt;
    private revision;
    static getAccountName(grn: string): string | null;
    static getProjectName(grn: string): string | null;
    static getTransactionId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(accountName: string | null, projectName: string | null, transactionId: string | null): string | null;
    getImportProgressId(): string | null;
    setImportProgressId(importProgressId: string | null): this;
    withImportProgressId(importProgressId: string | null): this;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getImported(): number | null;
    setImported(imported: number | null): this;
    withImported(imported: number | null): this;
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
    }): ImportProgress | null;
    toDict(): {
        [key: string]: any;
    };
}
