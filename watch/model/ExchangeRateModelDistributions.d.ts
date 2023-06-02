import IModel from '../../core/interface/IModel';
import ExchangeRateModelAmountDistribution from './ExchangeRateModelAmountDistribution';
export default class ExchangeRateModelDistributions implements IModel {
    private amount;
    getAmount(): ExchangeRateModelAmountDistribution | null;
    setAmount(amount: ExchangeRateModelAmountDistribution | null): this;
    withAmount(amount: ExchangeRateModelAmountDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeRateModelDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
