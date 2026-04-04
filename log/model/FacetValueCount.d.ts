import IModel from '../../core/interface/IModel';
export default class FacetValueCount implements IModel {
    private value;
    private count;
    getValue(): string | null;
    setValue(value: string | null): this;
    withValue(value: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FacetValueCount | null;
    toDict(): {
        [key: string]: any;
    };
}
