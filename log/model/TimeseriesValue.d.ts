import IModel from '../../core/interface/IModel';
export default class TimeseriesValue implements IModel {
    private key;
    private value;
    getKey(): string | null;
    setKey(key: string | null): this;
    withKey(key: string | null): this;
    getValue(): number | null;
    setValue(value: number | null): this;
    withValue(value: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): TimeseriesValue | null;
    toDict(): {
        [key: string]: any;
    };
}
