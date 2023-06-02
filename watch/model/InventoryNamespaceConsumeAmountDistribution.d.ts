import IModel from '../../core/interface/IModel';
import InventoryNamespaceConsumeAmountDistributionStatistics from './InventoryNamespaceConsumeAmountDistributionStatistics';
import InventoryNamespaceConsumeAmountDistributionSegment from './InventoryNamespaceConsumeAmountDistributionSegment';
export default class InventoryNamespaceConsumeAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): InventoryNamespaceConsumeAmountDistributionStatistics | null;
    setStatistics(statistics: InventoryNamespaceConsumeAmountDistributionStatistics | null): this;
    withStatistics(statistics: InventoryNamespaceConsumeAmountDistributionStatistics | null): this;
    getDistribution(): InventoryNamespaceConsumeAmountDistributionSegment[] | null;
    setDistribution(distribution: InventoryNamespaceConsumeAmountDistributionSegment[] | null): this;
    withDistribution(distribution: InventoryNamespaceConsumeAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceConsumeAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
