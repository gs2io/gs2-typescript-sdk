import IModel from '../../core/interface/IModel';
import InventoryInventoryConsumeAmountDistributionStatistics from './InventoryInventoryConsumeAmountDistributionStatistics';
import InventoryInventoryConsumeAmountDistributionSegment from './InventoryInventoryConsumeAmountDistributionSegment';
export default class InventoryInventoryConsumeAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): InventoryInventoryConsumeAmountDistributionStatistics | null;
    setStatistics(statistics: InventoryInventoryConsumeAmountDistributionStatistics | null): this;
    withStatistics(statistics: InventoryInventoryConsumeAmountDistributionStatistics | null): this;
    getDistribution(): InventoryInventoryConsumeAmountDistributionSegment[] | null;
    setDistribution(distribution: InventoryInventoryConsumeAmountDistributionSegment[] | null): this;
    withDistribution(distribution: InventoryInventoryConsumeAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryConsumeAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
