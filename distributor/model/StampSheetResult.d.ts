import IModel from '../../core/interface/IModel';
export default class StampSheetResult implements IModel {
    private stampSheetResultId;
    private userId;
    private transactionId;
    private taskResults;
    private sheetResult;
    private nextTransactionId;
    private createdAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getTransactionId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, transactionId: string | null): string | null;
    getStampSheetResultId(): string | null;
    setStampSheetResultId(stampSheetResultId: string | null): this;
    withStampSheetResultId(stampSheetResultId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getTaskResults(): string[] | null;
    setTaskResults(taskResults: string[] | null): this;
    withTaskResults(taskResults: string[] | null): this;
    getSheetResult(): string | null;
    setSheetResult(sheetResult: string | null): this;
    withSheetResult(sheetResult: string | null): this;
    getNextTransactionId(): string | null;
    setNextTransactionId(nextTransactionId: string | null): this;
    withNextTransactionId(nextTransactionId: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StampSheetResult | null;
    toDict(): {
        [key: string]: any;
    };
}
