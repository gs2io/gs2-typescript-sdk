import IModel from '../../core/interface/IModel';
import KeyNamespaceEncryptDistributionStatistics from './KeyNamespaceEncryptDistributionStatistics';
import KeyNamespaceEncryptDistributionSegment from './KeyNamespaceEncryptDistributionSegment';
export default class KeyNamespaceEncryptDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): KeyNamespaceEncryptDistributionStatistics | null;
    setStatistics(statistics: KeyNamespaceEncryptDistributionStatistics | null): this;
    withStatistics(statistics: KeyNamespaceEncryptDistributionStatistics | null): this;
    getDistribution(): KeyNamespaceEncryptDistributionSegment[] | null;
    setDistribution(distribution: KeyNamespaceEncryptDistributionSegment[] | null): this;
    withDistribution(distribution: KeyNamespaceEncryptDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): KeyNamespaceEncryptDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
