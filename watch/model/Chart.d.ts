import IModel from '../../core/interface/IModel';
export default class Chart implements IModel {
    private timestamp;
    private value;
    private groupBys;
    getTimestamp(): number | null;
    setTimestamp(timestamp: number | null): this;
    withTimestamp(timestamp: number | null): this;
    getValue(): number | null;
    setValue(value: number | null): this;
    withValue(value: number | null): this;
    getGroupBys(): string[] | null;
    setGroupBys(groupBys: string[] | null): this;
    withGroupBys(groupBys: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Chart | null;
    toDict(): {
        [key: string]: any;
    };
}
