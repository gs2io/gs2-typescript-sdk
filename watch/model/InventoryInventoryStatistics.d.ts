import IModel from '../../core/interface/IModel';
export default class InventoryInventoryStatistics implements IModel {
    private currentInventoryMaxCapacity;
    private count;
    getCurrentInventoryMaxCapacity(): number | null;
    setCurrentInventoryMaxCapacity(currentInventoryMaxCapacity: number | null): this;
    withCurrentInventoryMaxCapacity(currentInventoryMaxCapacity: number | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
