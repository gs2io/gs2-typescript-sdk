import IModel from '../../core/interface/IModel';
import InventoryInventoryStatisticsDistribution from './InventoryInventoryStatisticsDistribution';
export default class InventoryInventoryStatistics implements IModel {
    private currentInventoryMaxCapacity;
    private distribution;
    getCurrentInventoryMaxCapacity(): number | null;
    setCurrentInventoryMaxCapacity(currentInventoryMaxCapacity: number | null): this;
    withCurrentInventoryMaxCapacity(currentInventoryMaxCapacity: number | null): this;
    getDistribution(): InventoryInventoryStatisticsDistribution[] | null;
    setDistribution(distribution: InventoryInventoryStatisticsDistribution[] | null): this;
    withDistribution(distribution: InventoryInventoryStatisticsDistribution[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
