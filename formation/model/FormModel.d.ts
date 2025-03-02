import IModel from '../../core/interface/IModel';
import * as Gs2Formation from '../../formation/model';
export default class FormModel implements IModel {
    private formModelId;
    private name;
    private metadata;
    private slots;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getMoldModelName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, moldModelName: string | null): string | null;
    getFormModelId(): string | null;
    setFormModelId(formModelId: string | null): this;
    withFormModelId(formModelId: string | null): this;
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
    }): FormModel | null;
    toDict(): {
        [key: string]: any;
    };
}
