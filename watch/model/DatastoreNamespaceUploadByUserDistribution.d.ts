import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class DatastoreNamespaceUploadByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.DatastoreNamespaceUploadByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.DatastoreNamespaceUploadByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.DatastoreNamespaceUploadByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.DatastoreNamespaceUploadByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.DatastoreNamespaceUploadByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.DatastoreNamespaceUploadByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DatastoreNamespaceUploadByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
