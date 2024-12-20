import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class DatastoreNamespaceDataSizeDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.DatastoreNamespaceDataSizeDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.DatastoreNamespaceDataSizeDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.DatastoreNamespaceDataSizeDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.DatastoreNamespaceDataSizeDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.DatastoreNamespaceDataSizeDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.DatastoreNamespaceDataSizeDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DatastoreNamespaceDataSizeDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
