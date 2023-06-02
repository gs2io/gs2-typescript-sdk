import IModel from '../../core/interface/IModel';
import InventoryNamespaceAcquireDistributionStatistics from './InventoryNamespaceAcquireDistributionStatistics';
import InventoryNamespaceAcquireDistributionSegment from './InventoryNamespaceAcquireDistributionSegment';
export default class InventoryNamespaceAcquireDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): InventoryNamespaceAcquireDistributionStatistics | null;
    setStatistics(statistics: InventoryNamespaceAcquireDistributionStatistics | null): this;
    withStatistics(statistics: InventoryNamespaceAcquireDistributionStatistics | null): this;
    getDistribution(): InventoryNamespaceAcquireDistributionSegment[] | null;
    setDistribution(distribution: InventoryNamespaceAcquireDistributionSegment[] | null): this;
    withDistribution(distribution: InventoryNamespaceAcquireDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceAcquireDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
