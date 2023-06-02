import IModel from '../../core/interface/IModel';
export default class ExchangeNamespaceStatistics implements IModel {
    private exchange;
    private amount;
    getExchange(): number | null;
    setExchange(exchange: number | null): this;
    withExchange(exchange: number | null): this;
    getAmount(): number | null;
    setAmount(amount: number | null): this;
    withAmount(amount: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
