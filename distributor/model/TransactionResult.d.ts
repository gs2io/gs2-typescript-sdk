import IModel from '../../core/interface/IModel';
import * as Gs2Distributor from '../../distributor/model';
export default class TransactionResult implements IModel {
    private transactionResultId;
    private userId;
    private transactionId;
    private verifyResults;
    private consumeResults;
    private acquireResults;
    private createdAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getTransactionId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, transactionId: string | null): string | null;
    getTransactionResultId(): string | null;
    setTransactionResultId(transactionResultId: string | null): this;
    withTransactionResultId(transactionResultId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getVerifyResults(): Gs2Distributor.VerifyActionResult[] | null;
    setVerifyResults(verifyResults: Gs2Distributor.VerifyActionResult[] | null): this;
    withVerifyResults(verifyResults: Gs2Distributor.VerifyActionResult[] | null): this;
    getConsumeResults(): Gs2Distributor.ConsumeActionResult[] | null;
    setConsumeResults(consumeResults: Gs2Distributor.ConsumeActionResult[] | null): this;
    withConsumeResults(consumeResults: Gs2Distributor.ConsumeActionResult[] | null): this;
    getAcquireResults(): Gs2Distributor.AcquireActionResult[] | null;
    setAcquireResults(acquireResults: Gs2Distributor.AcquireActionResult[] | null): this;
    withAcquireResults(acquireResults: Gs2Distributor.AcquireActionResult[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): TransactionResult | null;
    toDict(): {
        [key: string]: any;
    };
}
