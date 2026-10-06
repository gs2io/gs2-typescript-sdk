import IModel from '../../core/interface/IModel';
export default class UnleashQuantityMaterialSetting implements IModel {
    private matchType;
    private materialInventoryModelId;
    private itemModelId;
    private count;
    getMatchType(): string | null;
    setMatchType(matchType: string | null): this;
    withMatchType(matchType: string | null): this;
    getMaterialInventoryModelId(): string | null;
    setMaterialInventoryModelId(materialInventoryModelId: string | null): this;
    withMaterialInventoryModelId(materialInventoryModelId: string | null): this;
    getItemModelId(): string | null;
    setItemModelId(itemModelId: string | null): this;
    withItemModelId(itemModelId: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnleashQuantityMaterialSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
