import IModel from '../../core/interface/IModel';
export default class ScopedValue implements IModel {
    private resetType;
    private value;
    private nextResetAt;
    private updatedAt;
    getResetType(): string | null;
    setResetType(resetType: string | null): this;
    withResetType(resetType: string | null): this;
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
