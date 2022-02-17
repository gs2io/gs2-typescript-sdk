import IModel from '../../core/interface/IModel';
export default class Material implements IModel {
    private materialItemSetId;
    private count;
    getMaterialItemSetId(): string | null;
    setMaterialItemSetId(materialItemSetId: string | null): this;
    withMaterialItemSetId(materialItemSetId: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Material | null;
    toDict(): {
        [key: string]: any;
    };
}
