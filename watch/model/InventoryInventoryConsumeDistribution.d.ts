import IModel from '../../core/interface/IModel';
import InventoryInventoryConsumeDistributionStatistics from './InventoryInventoryConsumeDistributionStatistics';
import InventoryInventoryConsumeDistributionSegment from './InventoryInventoryConsumeDistributionSegment';
export default class InventoryInventoryConsumeDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): InventoryInventoryConsumeDistributionStatistics | null;
    setStatistics(statistics: InventoryInventoryConsumeDistributionStatistics | null): this;
    withStatistics(statistics: InventoryInventoryConsumeDistributionStatistics | null): this;
    getDistribution(): InventoryInventoryConsumeDistributionSegment[] | null;
    setDistribution(distribution: InventoryInventoryConsumeDistributionSegment[] | null): this;
    withDistribution(distribution: InventoryInventoryConsumeDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryConsumeDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
