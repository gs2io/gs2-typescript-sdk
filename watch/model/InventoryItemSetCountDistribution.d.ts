import IModel from '../../core/interface/IModel';
import InventoryItemSetCountDistributionStatistics from './InventoryItemSetCountDistributionStatistics';
import InventoryItemSetCountDistributionSegment from './InventoryItemSetCountDistributionSegment';
export default class InventoryItemSetCountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): InventoryItemSetCountDistributionStatistics | null;
    setStatistics(statistics: InventoryItemSetCountDistributionStatistics | null): this;
    withStatistics(statistics: InventoryItemSetCountDistributionStatistics | null): this;
    getDistribution(): InventoryItemSetCountDistributionSegment[] | null;
    setDistribution(distribution: InventoryItemSetCountDistributionSegment[] | null): this;
    withDistribution(distribution: InventoryItemSetCountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryItemSetCountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
