import IModel from '../../core/interface/IModel';
import WalletDetail from './WalletDetail';
export default class Wallet implements IModel {
    private walletId;
    private userId;
    private slot;
    private paid;
    private free;
    private detail;
    private createdAt;
    private updatedAt;
    getWalletId(): string | null;
    setWalletId(walletId: string | null): this;
    withWalletId(walletId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getSlot(): number | null;
    setSlot(slot: number | null): this;
    withSlot(slot: number | null): this;
    getPaid(): number | null;
    setPaid(paid: number | null): this;
    withPaid(paid: number | null): this;
    getFree(): number | null;
    setFree(free: number | null): this;
    withFree(free: number | null): this;
    getDetail(): WalletDetail[] | null;
    setDetail(detail: WalletDetail[] | null): this;
    withDetail(detail: WalletDetail[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Wallet | null;
    toDict(): {
        [key: string]: any;
    };
}
