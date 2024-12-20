import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class KeyNamespaceDecryptDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.KeyNamespaceDecryptDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.KeyNamespaceDecryptDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.KeyNamespaceDecryptDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.KeyNamespaceDecryptDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.KeyNamespaceDecryptDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.KeyNamespaceDecryptDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): KeyNamespaceDecryptDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
