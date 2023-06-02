import IModel from '../../core/interface/IModel';
import DatastoreNamespaceUploadByUserDistributionStatistics from './DatastoreNamespaceUploadByUserDistributionStatistics';
import DatastoreNamespaceUploadByUserDistributionSegment from './DatastoreNamespaceUploadByUserDistributionSegment';
export default class DatastoreNamespaceUploadByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): DatastoreNamespaceUploadByUserDistributionStatistics | null;
    setStatistics(statistics: DatastoreNamespaceUploadByUserDistributionStatistics | null): this;
    withStatistics(statistics: DatastoreNamespaceUploadByUserDistributionStatistics | null): this;
    getDistribution(): DatastoreNamespaceUploadByUserDistributionSegment[] | null;
    setDistribution(distribution: DatastoreNamespaceUploadByUserDistributionSegment[] | null): this;
    withDistribution(distribution: DatastoreNamespaceUploadByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DatastoreNamespaceUploadByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
