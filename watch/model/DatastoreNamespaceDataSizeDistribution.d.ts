import IModel from '../../core/interface/IModel';
import DatastoreNamespaceDataSizeDistributionStatistics from './DatastoreNamespaceDataSizeDistributionStatistics';
import DatastoreNamespaceDataSizeDistributionSegment from './DatastoreNamespaceDataSizeDistributionSegment';
export default class DatastoreNamespaceDataSizeDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): DatastoreNamespaceDataSizeDistributionStatistics | null;
    setStatistics(statistics: DatastoreNamespaceDataSizeDistributionStatistics | null): this;
    withStatistics(statistics: DatastoreNamespaceDataSizeDistributionStatistics | null): this;
    getDistribution(): DatastoreNamespaceDataSizeDistributionSegment[] | null;
    setDistribution(distribution: DatastoreNamespaceDataSizeDistributionSegment[] | null): this;
    withDistribution(distribution: DatastoreNamespaceDataSizeDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DatastoreNamespaceDataSizeDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
