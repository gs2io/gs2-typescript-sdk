import IModel from '../../core/interface/IModel';
import DatastoreNamespaceDownloadByUserDistributionStatistics from './DatastoreNamespaceDownloadByUserDistributionStatistics';
import DatastoreNamespaceDownloadByUserDistributionSegment from './DatastoreNamespaceDownloadByUserDistributionSegment';
export default class DatastoreNamespaceDownloadByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): DatastoreNamespaceDownloadByUserDistributionStatistics | null;
    setStatistics(statistics: DatastoreNamespaceDownloadByUserDistributionStatistics | null): this;
    withStatistics(statistics: DatastoreNamespaceDownloadByUserDistributionStatistics | null): this;
    getDistribution(): DatastoreNamespaceDownloadByUserDistributionSegment[] | null;
    setDistribution(distribution: DatastoreNamespaceDownloadByUserDistributionSegment[] | null): this;
    withDistribution(distribution: DatastoreNamespaceDownloadByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DatastoreNamespaceDownloadByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
