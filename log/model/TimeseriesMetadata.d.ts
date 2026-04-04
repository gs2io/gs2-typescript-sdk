import IModel from '../../core/interface/IModel';
export default class TimeseriesMetadata implements IModel {
    private keys;
    private groupBy;
    getKeys(): string[] | null;
    setKeys(keys: string[] | null): this;
    withKeys(keys: string[] | null): this;
    getGroupBy(): string[] | null;
    setGroupBy(groupBy: string[] | null): this;
    withGroupBy(groupBy: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): TimeseriesMetadata | null;
    toDict(): {
        [key: string]: any;
    };
}
