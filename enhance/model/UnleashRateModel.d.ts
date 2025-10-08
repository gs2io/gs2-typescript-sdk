import IModel from '../../core/interface/IModel';
import * as Gs2Enhance from '../../enhance/model';
export default class UnleashRateModel implements IModel {
    private unleashRateModelId;
    private name;
    private description;
    private metadata;
    private targetInventoryModelId;
    private gradeModelId;
    private gradeEntries;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getRateName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, rateName: string | null): string | null;
    getUnleashRateModelId(): string | null;
    setUnleashRateModelId(unleashRateModelId: string | null): this;
    withUnleashRateModelId(unleashRateModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getTargetInventoryModelId(): string | null;
    setTargetInventoryModelId(targetInventoryModelId: string | null): this;
    withTargetInventoryModelId(targetInventoryModelId: string | null): this;
    getGradeModelId(): string | null;
    setGradeModelId(gradeModelId: string | null): this;
    withGradeModelId(gradeModelId: string | null): this;
    getGradeEntries(): Gs2Enhance.UnleashRateEntryModel[] | null;
    setGradeEntries(gradeEntries: Gs2Enhance.UnleashRateEntryModel[] | null): this;
    withGradeEntries(gradeEntries: Gs2Enhance.UnleashRateEntryModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnleashRateModel | null;
    toDict(): {
        [key: string]: any;
    };
}
