import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ExchangeNamespaceDistributions implements IModel {
    private exchange;
    private exchangeAmount;
    private exchangeByUser;
    private exchangeAmountByUser;
    getExchange(): Gs2Watch.ExchangeNamespaceExchangeDistribution | null;
    setExchange(exchange: Gs2Watch.ExchangeNamespaceExchangeDistribution | null): this;
    withExchange(exchange: Gs2Watch.ExchangeNamespaceExchangeDistribution | null): this;
    getExchangeAmount(): Gs2Watch.ExchangeNamespaceExchangeAmountDistribution | null;
    setExchangeAmount(exchangeAmount: Gs2Watch.ExchangeNamespaceExchangeAmountDistribution | null): this;
    withExchangeAmount(exchangeAmount: Gs2Watch.ExchangeNamespaceExchangeAmountDistribution | null): this;
    getExchangeByUser(): Gs2Watch.ExchangeNamespaceExchangeByUserDistribution | null;
    setExchangeByUser(exchangeByUser: Gs2Watch.ExchangeNamespaceExchangeByUserDistribution | null): this;
    withExchangeByUser(exchangeByUser: Gs2Watch.ExchangeNamespaceExchangeByUserDistribution | null): this;
    getExchangeAmountByUser(): Gs2Watch.ExchangeNamespaceExchangeAmountByUserDistribution | null;
    setExchangeAmountByUser(exchangeAmountByUser: Gs2Watch.ExchangeNamespaceExchangeAmountByUserDistribution | null): this;
    withExchangeAmountByUser(exchangeAmountByUser: Gs2Watch.ExchangeNamespaceExchangeAmountByUserDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
