import IModel from '../../core/interface/IModel';
export default class History implements IModel {
    private provider;
    private transactionId;
    private createdAt;
    private revision;
    static isValid(grn: string): boolean;
    static createGrn(): string | null;
    getProvider(): string | null;
    setProvider(provider: string | null): this;
    withProvider(provider: string | null): this;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): History | null;
    toDict(): {
        [key: string]: any;
    };
}
