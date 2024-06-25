import IModel from '../../core/interface/IModel';
import DepositTransaction from './DepositTransaction';
import WalletSummary from './WalletSummary';
export default class DepositEvent implements IModel {
    private slot;
    private depositTransactions;
    private status;
    getSlot(): number | null;
    setSlot(slot: number | null): this;
    withSlot(slot: number | null): this;
    getDepositTransactions(): DepositTransaction[] | null;
    setDepositTransactions(depositTransactions: DepositTransaction[] | null): this;
    withDepositTransactions(depositTransactions: DepositTransaction[] | null): this;
    getStatus(): WalletSummary | null;
    setStatus(status: WalletSummary | null): this;
    withStatus(status: WalletSummary | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DepositEvent | null;
    toDict(): {
        [key: string]: any;
    };
}
