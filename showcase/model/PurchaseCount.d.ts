import IModel from '../../core/interface/IModel';
export default class PurchaseCount implements IModel {
    private name;
    private count;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PurchaseCount | null;
    toDict(): {
        [key: string]: any;
    };
}
