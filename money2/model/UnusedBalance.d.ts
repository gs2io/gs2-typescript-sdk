import IModel from '../../core/interface/IModel';
export default class UnusedBalance implements IModel {
    private unusedBalanceId;
    private currency;
    private balance;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getCurrency(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, currency: string | null): string | null;
    getUnusedBalanceId(): string | null;
    setUnusedBalanceId(unusedBalanceId: string | null): this;
    withUnusedBalanceId(unusedBalanceId: string | null): this;
    getCurrency(): string | null;
    setCurrency(currency: string | null): this;
    withCurrency(currency: string | null): this;
    getBalance(): number | null;
    setBalance(balance: number | null): this;
    withBalance(balance: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnusedBalance | null;
    toDict(): {
        [key: string]: any;
    };
}
