import IModel from '../../core/interface/IModel';
import KeyNamespaceDecryptDistributionStatistics from './KeyNamespaceDecryptDistributionStatistics';
import KeyNamespaceDecryptDistributionSegment from './KeyNamespaceDecryptDistributionSegment';
export default class KeyNamespaceDecryptDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): KeyNamespaceDecryptDistributionStatistics | null;
    setStatistics(statistics: KeyNamespaceDecryptDistributionStatistics | null): this;
    withStatistics(statistics: KeyNamespaceDecryptDistributionStatistics | null): this;
    getDistribution(): KeyNamespaceDecryptDistributionSegment[] | null;
    setDistribution(distribution: KeyNamespaceDecryptDistributionSegment[] | null): this;
    withDistribution(distribution: KeyNamespaceDecryptDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): KeyNamespaceDecryptDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
