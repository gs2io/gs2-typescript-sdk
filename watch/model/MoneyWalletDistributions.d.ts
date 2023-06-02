import IModel from '../../core/interface/IModel';
import MoneyWalletFreeDistribution from './MoneyWalletFreeDistribution';
import MoneyWalletPaidDistribution from './MoneyWalletPaidDistribution';
export default class MoneyWalletDistributions implements IModel {
    private free;
    private paid;
    getFree(): MoneyWalletFreeDistribution | null;
    setFree(free: MoneyWalletFreeDistribution | null): this;
    withFree(free: MoneyWalletFreeDistribution | null): this;
    getPaid(): MoneyWalletPaidDistribution | null;
    setPaid(paid: MoneyWalletPaidDistribution | null): this;
    withPaid(paid: MoneyWalletPaidDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyWalletDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
