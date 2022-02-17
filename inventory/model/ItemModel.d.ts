import IModel from '../../core/interface/IModel';
export default class ItemModel implements IModel {
    private itemModelId;
    private name;
    private metadata;
    private stackingLimit;
    private allowMultipleStacks;
    private sortValue;
    getItemModelId(): string | null;
    setItemModelId(itemModelId: string | null): this;
    withItemModelId(itemModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getStackingLimit(): number | null;
    setStackingLimit(stackingLimit: number | null): this;
    withStackingLimit(stackingLimit: number | null): this;
    getAllowMultipleStacks(): boolean | null;
    setAllowMultipleStacks(allowMultipleStacks: boolean | null): this;
    withAllowMultipleStacks(allowMultipleStacks: boolean | null): this;
    getSortValue(): number | null;
    setSortValue(sortValue: number | null): this;
    withSortValue(sortValue: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ItemModel | null;
    toDict(): {
        [key: string]: any;
    };
}
