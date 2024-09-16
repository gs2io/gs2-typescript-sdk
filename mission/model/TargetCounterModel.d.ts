import IModel from '../../core/interface/IModel';
export default class TargetCounterModel implements IModel {
    private counterName;
    private scopeType;
    private resetType;
    private conditionName;
    private value;
    getCounterName(): string | null;
    setCounterName(counterName: string | null): this;
    withCounterName(counterName: string | null): this;
    getScopeType(): string | null;
    setScopeType(scopeType: string | null): this;
    withScopeType(scopeType: string | null): this;
    getResetType(): string | null;
    setResetType(resetType: string | null): this;
    withResetType(resetType: string | null): this;
    getConditionName(): string | null;
    setConditionName(conditionName: string | null): this;
    withConditionName(conditionName: string | null): this;
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
