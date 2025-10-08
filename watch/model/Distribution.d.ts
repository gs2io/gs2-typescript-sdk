import IModel from '../../core/interface/IModel';
export default class Distribution implements IModel {
    private value;
    private count;
    private groupBys;
    getValue(): number | null;
    setValue(value: number | null): this;
    withValue(value: number | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    getGroupBys(): string[] | null;
    setGroupBys(groupBys: string[] | null): this;
    withGroupBys(groupBys: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Distribution | null;
    toDict(): {
        [key: string]: any;
    };
}
