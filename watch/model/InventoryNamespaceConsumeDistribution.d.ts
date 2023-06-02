import IModel from '../../core/interface/IModel';
import InventoryNamespaceConsumeDistributionStatistics from './InventoryNamespaceConsumeDistributionStatistics';
import InventoryNamespaceConsumeDistributionSegment from './InventoryNamespaceConsumeDistributionSegment';
export default class InventoryNamespaceConsumeDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): InventoryNamespaceConsumeDistributionStatistics | null;
    setStatistics(statistics: InventoryNamespaceConsumeDistributionStatistics | null): this;
    withStatistics(statistics: InventoryNamespaceConsumeDistributionStatistics | null): this;
    getDistribution(): InventoryNamespaceConsumeDistributionSegment[] | null;
    setDistribution(distribution: InventoryNamespaceConsumeDistributionSegment[] | null): this;
    withDistribution(distribution: InventoryNamespaceConsumeDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceConsumeDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
