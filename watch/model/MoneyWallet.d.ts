import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MoneyWallet implements IModel {
    private walletId;
    private slot;
    private statistics;
    private distributions;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getContentsId(grn: string): string | null;
    static getSlot(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, contentsId: string | null, slot: string | null): string | null;
    getWalletId(): string | null;
    setWalletId(walletId: string | null): this;
    withWalletId(walletId: string | null): this;
    getSlot(): number | null;
    setSlot(slot: number | null): this;
    withSlot(slot: number | null): this;
    getStatistics(): Gs2Watch.MoneyWalletStatistics | null;
    setStatistics(statistics: Gs2Watch.MoneyWalletStatistics | null): this;
    withStatistics(statistics: Gs2Watch.MoneyWalletStatistics | null): this;
    getDistributions(): Gs2Watch.MoneyWalletDistributions | null;
    setDistributions(distributions: Gs2Watch.MoneyWalletDistributions | null): this;
    withDistributions(distributions: Gs2Watch.MoneyWalletDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyWallet | null;
    toDict(): {
        [key: string]: any;
    };
}
