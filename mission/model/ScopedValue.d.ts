import IModel from '../../core/interface/IModel';
export default class ScopedValue implements IModel {
    private scopeType;
    private resetType;
    private conditionName;
    private value;
    private nextResetAt;
    private updatedAt;
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
    getNextResetAt(): number | null;
    setNextResetAt(nextResetAt: number | null): this;
    withNextResetAt(nextResetAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ScopedValue | null;
    toDict(): {
        [key: string]: any;
    };
}
