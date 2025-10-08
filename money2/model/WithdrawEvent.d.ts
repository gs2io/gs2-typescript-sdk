import IModel from '../../core/interface/IModel';
import * as Gs2Money2 from '../../money2/model';
export default class WithdrawEvent implements IModel {
    private slot;
    private withdrawDetails;
    private status;
    getSlot(): number | null;
    setSlot(slot: number | null): this;
    withSlot(slot: number | null): this;
    getWithdrawDetails(): Gs2Money2.DepositTransaction[] | null;
    setWithdrawDetails(withdrawDetails: Gs2Money2.DepositTransaction[] | null): this;
    withWithdrawDetails(withdrawDetails: Gs2Money2.DepositTransaction[] | null): this;
    getStatus(): Gs2Money2.WalletSummary | null;
    setStatus(status: Gs2Money2.WalletSummary | null): this;
    withStatus(status: Gs2Money2.WalletSummary | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WithdrawEvent | null;
    toDict(): {
        [key: string]: any;
    };
}
