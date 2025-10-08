import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MoneyReceipt implements IModel {
    private receiptId;
    private contentsId;
    private statistics;
    private distributions;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getContentsId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, contentsId: string | null): string | null;
    getReceiptId(): string | null;
    setReceiptId(receiptId: string | null): this;
    withReceiptId(receiptId: string | null): this;
    getContentsId(): string | null;
    setContentsId(contentsId: string | null): this;
    withContentsId(contentsId: string | null): this;
    getStatistics(): Gs2Watch.MoneyReceiptStatistics | null;
    setStatistics(statistics: Gs2Watch.MoneyReceiptStatistics | null): this;
    withStatistics(statistics: Gs2Watch.MoneyReceiptStatistics | null): this;
    getDistributions(): Gs2Watch.MoneyReceiptDistributions | null;
    setDistributions(distributions: Gs2Watch.MoneyReceiptDistributions | null): this;
    withDistributions(distributions: Gs2Watch.MoneyReceiptDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyReceipt | null;
    toDict(): {
        [key: string]: any;
    };
}
