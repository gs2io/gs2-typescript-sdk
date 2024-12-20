import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class DatastoreNamespaceDownloadByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.DatastoreNamespaceDownloadByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.DatastoreNamespaceDownloadByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.DatastoreNamespaceDownloadByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.DatastoreNamespaceDownloadByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.DatastoreNamespaceDownloadByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.DatastoreNamespaceDownloadByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DatastoreNamespaceDownloadByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
