import IModel from '../../core/interface/IModel';
import InventoryNamespaceAcquireAmountDistributionStatistics from './InventoryNamespaceAcquireAmountDistributionStatistics';
import InventoryNamespaceAcquireAmountDistributionSegment from './InventoryNamespaceAcquireAmountDistributionSegment';
export default class InventoryNamespaceAcquireAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): InventoryNamespaceAcquireAmountDistributionStatistics | null;
    setStatistics(statistics: InventoryNamespaceAcquireAmountDistributionStatistics | null): this;
    withStatistics(statistics: InventoryNamespaceAcquireAmountDistributionStatistics | null): this;
    getDistribution(): InventoryNamespaceAcquireAmountDistributionSegment[] | null;
    setDistribution(distribution: InventoryNamespaceAcquireAmountDistributionSegment[] | null): this;
    withDistribution(distribution: InventoryNamespaceAcquireAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceAcquireAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
