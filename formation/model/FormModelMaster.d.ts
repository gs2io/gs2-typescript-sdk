import IModel from '../../core/interface/IModel';
import SlotModel from './SlotModel';
export default class FormModelMaster implements IModel {
    private formModelId;
    private name;
    private description;
    private metadata;
    private slots;
    private createdAt;
    private updatedAt;
    getFormModelId(): string | null;
    setFormModelId(formModelId: string | null): this;
    withFormModelId(formModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getSlots(): SlotModel[] | null;
    setSlots(slots: SlotModel[] | null): this;
    withSlots(slots: SlotModel[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
