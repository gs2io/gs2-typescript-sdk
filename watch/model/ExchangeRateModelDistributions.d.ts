import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ExchangeRateModelDistributions implements IModel {
    private amount;
    getAmount(): Gs2Watch.ExchangeRateModelAmountDistribution | null;
    setAmount(amount: Gs2Watch.ExchangeRateModelAmountDistribution | null): this;
    withAmount(amount: Gs2Watch.ExchangeRateModelAmountDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeRateModelDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
