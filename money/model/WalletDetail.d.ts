import IModel from '../../core/interface/IModel';
export default class WalletDetail implements IModel {
    private price;
    private count;
    getPrice(): number | null;
    setPrice(price: number | null): this;
    withPrice(price: number | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WalletDetail | null;
    toDict(): {
        [key: string]: any;
    };
}
