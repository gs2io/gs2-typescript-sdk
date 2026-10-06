import IModel from '../../core/interface/IModel';
export default class UnleashMaterialSelection implements IModel {
    private name;
    private itemSetIds;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getItemSetIds(): string[] | null;
    setItemSetIds(itemSetIds: string[] | null): this;
    withItemSetIds(itemSetIds: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnleashMaterialSelection | null;
    toDict(): {
        [key: string]: any;
    };
}
