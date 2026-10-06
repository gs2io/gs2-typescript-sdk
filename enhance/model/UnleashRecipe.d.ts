import IModel from '../../core/interface/IModel';
import * as Gs2Enhance from '../../enhance/model';
export default class UnleashRecipe implements IModel {
    private name;
    private metadata;
    private targetGroupKeys;
    private materials;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getTargetGroupKeys(): string[] | null;
    setTargetGroupKeys(targetGroupKeys: string[] | null): this;
    withTargetGroupKeys(targetGroupKeys: string[] | null): this;
    getMaterials(): Gs2Enhance.UnleashMaterial[] | null;
    setMaterials(materials: Gs2Enhance.UnleashMaterial[] | null): this;
    withMaterials(materials: Gs2Enhance.UnleashMaterial[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnleashRecipe | null;
    toDict(): {
        [key: string]: any;
    };
}
