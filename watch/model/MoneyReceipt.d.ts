import IModel from '../../core/interface/IModel';
import MoneyReceiptStatistics from './MoneyReceiptStatistics';
import MoneyReceiptDistributions from './MoneyReceiptDistributions';
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
    getStatistics(): MoneyReceiptStatistics | null;
    setStatistics(statistics: MoneyReceiptStatistics | null): this;
    withStatistics(statistics: MoneyReceiptStatistics | null): this;
    getDistributions(): MoneyReceiptDistributions | null;
    setDistributions(distributions: MoneyReceiptDistributions | null): this;
    withDistributions(distributions: MoneyReceiptDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyReceipt | null;
    toDict(): {
        [key: string]: any;
    };
}
