import IModel from '../../core/interface/IModel';
import * as Gs2Formation from '../../formation/model';
export default class PropertyFormModel implements IModel {
    private propertyFormModelId;
    private name;
    private metadata;
    private slots;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getPropertyFormModelName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, propertyFormModelName: string | null): string | null;
    getPropertyFormModelId(): string | null;
    setPropertyFormModelId(propertyFormModelId: string | null): this;
    withPropertyFormModelId(propertyFormModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getSlots(): Gs2Formation.SlotModel[] | null;
    setSlots(slots: Gs2Formation.SlotModel[] | null): this;
    withSlots(slots: Gs2Formation.SlotModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PropertyFormModel | null;
    toDict(): {
        [key: string]: any;
    };
}
