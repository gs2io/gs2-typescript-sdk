import IModel from '../../core/interface/IModel';
export default class ThresholdMaster implements IModel {
    private thresholdId;
    private name;
    private description;
    private metadata;
    private values;
    private createdAt;
    private updatedAt;
    getThresholdId(): string | null;
    setThresholdId(thresholdId: string | null): this;
    withThresholdId(thresholdId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getValues(): number[] | null;
    setValues(values: number[] | null): this;
    withValues(values: number[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ThresholdMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
