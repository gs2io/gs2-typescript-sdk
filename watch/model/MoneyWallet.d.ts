import IModel from '../../core/interface/IModel';
import MoneyWalletStatistics from './MoneyWalletStatistics';
import MoneyWalletDistributions from './MoneyWalletDistributions';
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
    getSlot(): string | null;
    setSlot(slot: string | null): this;
    withSlot(slot: string | null): this;
    getStatistics(): MoneyWalletStatistics | null;
    setStatistics(statistics: MoneyWalletStatistics | null): this;
    withStatistics(statistics: MoneyWalletStatistics | null): this;
    getDistributions(): MoneyWalletDistributions | null;
    setDistributions(distributions: MoneyWalletDistributions | null): this;
    withDistributions(distributions: MoneyWalletDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyWallet | null;
    toDict(): {
        [key: string]: any;
    };
}
