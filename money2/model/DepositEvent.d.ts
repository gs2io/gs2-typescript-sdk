import IModel from '../../core/interface/IModel';
import * as Gs2Money2 from '../../money2/model';
export default class DepositEvent implements IModel {
    private slot;
    private depositTransactions;
    private status;
    getSlot(): number | null;
    setSlot(slot: number | null): this;
    withSlot(slot: number | null): this;
    getDepositTransactions(): Gs2Money2.DepositTransaction[] | null;
    setDepositTransactions(depositTransactions: Gs2Money2.DepositTransaction[] | null): this;
    withDepositTransactions(depositTransactions: Gs2Money2.DepositTransaction[] | null): this;
    getStatus(): Gs2Money2.WalletSummary | null;
    setStatus(status: Gs2Money2.WalletSummary | null): this;
    withStatus(status: Gs2Money2.WalletSummary | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DepositEvent | null;
    toDict(): {
        [key: string]: any;
    };
}
