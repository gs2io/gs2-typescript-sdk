import IModel from '../../core/interface/IModel';
import DepositTransaction from './DepositTransaction';
import WalletSummary from './WalletSummary';
export default class WithdrawEvent implements IModel {
    private slot;
    private withdrawDetails;
    private status;
    getSlot(): number | null;
    setSlot(slot: number | null): this;
    withSlot(slot: number | null): this;
    getWithdrawDetails(): DepositTransaction[] | null;
    setWithdrawDetails(withdrawDetails: DepositTransaction[] | null): this;
    withWithdrawDetails(withdrawDetails: DepositTransaction[] | null): this;
    getStatus(): WalletSummary | null;
    setStatus(status: WalletSummary | null): this;
    withStatus(status: WalletSummary | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WithdrawEvent | null;
    toDict(): {
        [key: string]: any;
    };
}
