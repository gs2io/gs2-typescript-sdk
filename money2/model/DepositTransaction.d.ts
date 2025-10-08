import IModel from '../../core/interface/IModel';
export default class DepositTransaction implements IModel {
    private price;
    private currency;
    private count;
    private depositedAt;
    getPrice(): number | null;
    setPrice(price: number | null): this;
    withPrice(price: number | null): this;
    getCurrency(): string | null;
    setCurrency(currency: string | null): this;
    withCurrency(currency: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    getDepositedAt(): number | null;
    setDepositedAt(depositedAt: number | null): this;
    withDepositedAt(depositedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DepositTransaction | null;
    toDict(): {
        [key: string]: any;
    };
}
