import IModel from '../../core/interface/IModel';
export default class TargetCounterModel implements IModel {
    private counterName;
    private resetType;
    private value;
    getCounterName(): string | null;
    setCounterName(counterName: string | null): this;
    withCounterName(counterName: string | null): this;
    getResetType(): string | null;
    setResetType(resetType: string | null): this;
    withResetType(resetType: string | null): this;
    getValue(): number | null;
    setValue(value: number | null): this;
    withValue(value: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): TargetCounterModel | null;
    toDict(): {
        [key: string]: any;
    };
}
