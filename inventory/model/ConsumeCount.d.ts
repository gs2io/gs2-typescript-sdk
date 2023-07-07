import IModel from '../../core/interface/IModel';
export default class ConsumeCount implements IModel {
    private itemName;
    private count;
    getItemName(): string | null;
    setItemName(itemName: string | null): this;
    withItemName(itemName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ConsumeCount | null;
    toDict(): {
        [key: string]: any;
    };
}
