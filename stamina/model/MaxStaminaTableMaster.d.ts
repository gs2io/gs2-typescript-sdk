import IModel from '../../core/interface/IModel';
export default class MaxStaminaTableMaster implements IModel {
    private maxStaminaTableId;
    private name;
    private metadata;
    private description;
    private experienceModelId;
    private values;
    private createdAt;
    private updatedAt;
    getMaxStaminaTableId(): string | null;
    setMaxStaminaTableId(maxStaminaTableId: string | null): this;
    withMaxStaminaTableId(maxStaminaTableId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getExperienceModelId(): string | null;
    setExperienceModelId(experienceModelId: string | null): this;
    withExperienceModelId(experienceModelId: string | null): this;
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
    }): MaxStaminaTableMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
