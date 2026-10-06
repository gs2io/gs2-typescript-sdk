import IModel from '../../core/interface/IModel';
import * as Gs2Enhance from '../../enhance/model';
export default class UnleashMaterial implements IModel {
    private name;
    private materialType;
    private individualSetting;
    private quantitySetting;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMaterialType(): string | null;
    setMaterialType(materialType: string | null): this;
    withMaterialType(materialType: string | null): this;
    getIndividualSetting(): Gs2Enhance.UnleashIndividualMaterialSetting | null;
    setIndividualSetting(individualSetting: Gs2Enhance.UnleashIndividualMaterialSetting | null): this;
    withIndividualSetting(individualSetting: Gs2Enhance.UnleashIndividualMaterialSetting | null): this;
    getQuantitySetting(): Gs2Enhance.UnleashQuantityMaterialSetting | null;
    setQuantitySetting(quantitySetting: Gs2Enhance.UnleashQuantityMaterialSetting | null): this;
    withQuantitySetting(quantitySetting: Gs2Enhance.UnleashQuantityMaterialSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnleashMaterial | null;
    toDict(): {
        [key: string]: any;
    };
}
