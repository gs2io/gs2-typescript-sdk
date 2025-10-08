import IModel from '../../core/interface/IModel';
import * as Gs2Money2 from '../../money2/model';
export default class RefundHistory implements IModel {
    private refundHistoryId;
    private transactionId;
    private year;
    private month;
    private day;
    private userId;
    private detail;
    private createdAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getTransactionId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, transactionId: string | null): string | null;
    getRefundHistoryId(): string | null;
    setRefundHistoryId(refundHistoryId: string | null): this;
    withRefundHistoryId(refundHistoryId: string | null): this;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getYear(): number | null;
    setYear(year: number | null): this;
    withYear(year: number | null): this;
    getMonth(): number | null;
    setMonth(month: number | null): this;
    withMonth(month: number | null): this;
    getDay(): number | null;
    setDay(day: number | null): this;
    withDay(day: number | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getDetail(): Gs2Money2.RefundEvent | null;
    setDetail(detail: Gs2Money2.RefundEvent | null): this;
    withDetail(detail: Gs2Money2.RefundEvent | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RefundHistory | null;
    toDict(): {
        [key: string]: any;
    };
}
