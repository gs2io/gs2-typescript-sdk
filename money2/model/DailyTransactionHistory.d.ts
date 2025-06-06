import IModel from '../../core/interface/IModel';
export default class DailyTransactionHistory implements IModel {
    private dailyTransactionHistoryId;
    private year;
    private month;
    private day;
    private currency;
    private depositAmount;
    private withdrawAmount;
    private issueCount;
    private consumeCount;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getCurrency(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, year: string | null, month: string | null, day: string | null, currency: string | null): string | null;
    getDailyTransactionHistoryId(): string | null;
    setDailyTransactionHistoryId(dailyTransactionHistoryId: string | null): this;
    withDailyTransactionHistoryId(dailyTransactionHistoryId: string | null): this;
    getYear(): number | null;
    setYear(year: number | null): this;
    withYear(year: number | null): this;
    getMonth(): number | null;
    setMonth(month: number | null): this;
    withMonth(month: number | null): this;
    getDay(): number | null;
    setDay(day: number | null): this;
    withDay(day: number | null): this;
    getCurrency(): string | null;
    setCurrency(currency: string | null): this;
    withCurrency(currency: string | null): this;
    getDepositAmount(): number | null;
    setDepositAmount(depositAmount: number | null): this;
    withDepositAmount(depositAmount: number | null): this;
    getWithdrawAmount(): number | null;
    setWithdrawAmount(withdrawAmount: number | null): this;
    withWithdrawAmount(withdrawAmount: number | null): this;
    getIssueCount(): number | null;
    setIssueCount(issueCount: number | null): this;
    withIssueCount(issueCount: number | null): this;
    getConsumeCount(): number | null;
    setConsumeCount(consumeCount: number | null): this;
    withConsumeCount(consumeCount: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DailyTransactionHistory | null;
    toDict(): {
        [key: string]: any;
    };
}
