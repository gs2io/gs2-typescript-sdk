import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class KeyNamespaceEncryptDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.KeyNamespaceEncryptDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.KeyNamespaceEncryptDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.KeyNamespaceEncryptDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.KeyNamespaceEncryptDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.KeyNamespaceEncryptDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.KeyNamespaceEncryptDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): KeyNamespaceEncryptDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
