import IModel from '../../core/interface/IModel';
import ExchangeNamespaceExchangeDistribution from './ExchangeNamespaceExchangeDistribution';
import ExchangeNamespaceExchangeAmountDistribution from './ExchangeNamespaceExchangeAmountDistribution';
import ExchangeNamespaceExchangeByUserDistribution from './ExchangeNamespaceExchangeByUserDistribution';
import ExchangeNamespaceExchangeAmountByUserDistribution from './ExchangeNamespaceExchangeAmountByUserDistribution';
export default class ExchangeNamespaceDistributions implements IModel {
    private exchange;
    private exchangeAmount;
    private exchangeByUser;
    private exchangeAmountByUser;
    getExchange(): ExchangeNamespaceExchangeDistribution | null;
    setExchange(exchange: ExchangeNamespaceExchangeDistribution | null): this;
    withExchange(exchange: ExchangeNamespaceExchangeDistribution | null): this;
    getExchangeAmount(): ExchangeNamespaceExchangeAmountDistribution | null;
    setExchangeAmount(exchangeAmount: ExchangeNamespaceExchangeAmountDistribution | null): this;
    withExchangeAmount(exchangeAmount: ExchangeNamespaceExchangeAmountDistribution | null): this;
    getExchangeByUser(): ExchangeNamespaceExchangeByUserDistribution | null;
    setExchangeByUser(exchangeByUser: ExchangeNamespaceExchangeByUserDistribution | null): this;
    withExchangeByUser(exchangeByUser: ExchangeNamespaceExchangeByUserDistribution | null): this;
    getExchangeAmountByUser(): ExchangeNamespaceExchangeAmountByUserDistribution | null;
    setExchangeAmountByUser(exchangeAmountByUser: ExchangeNamespaceExchangeAmountByUserDistribution | null): this;
    withExchangeAmountByUser(exchangeAmountByUser: ExchangeNamespaceExchangeAmountByUserDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
