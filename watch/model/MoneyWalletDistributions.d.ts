import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MoneyWalletDistributions implements IModel {
    private free;
    private paid;
    getFree(): Gs2Watch.MoneyWalletFreeDistribution | null;
    setFree(free: Gs2Watch.MoneyWalletFreeDistribution | null): this;
    withFree(free: Gs2Watch.MoneyWalletFreeDistribution | null): this;
    getPaid(): Gs2Watch.MoneyWalletPaidDistribution | null;
    setPaid(paid: Gs2Watch.MoneyWalletPaidDistribution | null): this;
    withPaid(paid: Gs2Watch.MoneyWalletPaidDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyWalletDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
