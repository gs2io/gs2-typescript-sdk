import IModel from '../../core/interface/IModel';
import WalletSummary from './WalletSummary';
import DepositTransaction from './DepositTransaction';
export default class Wallet implements IModel {
    private walletId;
    private userId;
    private slot;
    private summary;
    private depositTransactions;
    private sharedFreeCurrency;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getSlot(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, slot: string | null): string | null;
    getWalletId(): string | null;
    setWalletId(walletId: string | null): this;
    withWalletId(walletId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getSlot(): number | null;
    setSlot(slot: number | null): this;
    withSlot(slot: number | null): this;
    getSummary(): WalletSummary | null;
    setSummary(summary: WalletSummary | null): this;
    withSummary(summary: WalletSummary | null): this;
    getDepositTransactions(): DepositTransaction[] | null;
    setDepositTransactions(depositTransactions: DepositTransaction[] | null): this;
    withDepositTransactions(depositTransactions: DepositTransaction[] | null): this;
    getSharedFreeCurrency(): boolean | null;
    setSharedFreeCurrency(sharedFreeCurrency: boolean | null): this;
    withSharedFreeCurrency(sharedFreeCurrency: boolean | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Wallet | null;
    toDict(): {
        [key: string]: any;
    };
}
