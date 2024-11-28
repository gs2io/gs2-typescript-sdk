import IModel from '../../core/interface/IModel';
import * as Gs2Formation from '../../formation/model';
export default class MoldModel implements IModel {
    private moldModelId;
    private name;
    private metadata;
    private initialMaxCapacity;
    private maxCapacity;
    private formModel;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getMoldModelName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, moldModelName: string | null): string | null;
    getMoldModelId(): string | null;
    setMoldModelId(moldModelId: string | null): this;
    withMoldModelId(moldModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getInitialMaxCapacity(): number | null;
    setInitialMaxCapacity(initialMaxCapacity: number | null): this;
    withInitialMaxCapacity(initialMaxCapacity: number | null): this;
    getMaxCapacity(): number | null;
    setMaxCapacity(maxCapacity: number | null): this;
    withMaxCapacity(maxCapacity: number | null): this;
    getFormModel(): Gs2Formation.FormModel | null;
    setFormModel(formModel: Gs2Formation.FormModel | null): this;
    withFormModel(formModel: Gs2Formation.FormModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoldModel | null;
    toDict(): {
        [key: string]: any;
    };
}
