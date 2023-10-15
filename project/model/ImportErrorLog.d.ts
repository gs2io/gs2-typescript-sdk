import IModel from '../../core/interface/IModel';
export default class ImportErrorLog implements IModel {
    private dumpProgressId;
    private name;
    private microserviceName;
    private message;
    private createdAt;
    private revision;
    static getAccountName(grn: string): string | null;
    static getProjectName(grn: string): string | null;
    static getTransactionId(grn: string): string | null;
    static getErrorLogName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(accountName: string | null, projectName: string | null, transactionId: string | null, errorLogName: string | null): string | null;
    getDumpProgressId(): string | null;
    setDumpProgressId(dumpProgressId: string | null): this;
    withDumpProgressId(dumpProgressId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMicroserviceName(): string | null;
    setMicroserviceName(microserviceName: string | null): this;
    withMicroserviceName(microserviceName: string | null): this;
    getMessage(): string | null;
    setMessage(message: string | null): this;
    withMessage(message: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ImportErrorLog | null;
    toDict(): {
        [key: string]: any;
    };
}
