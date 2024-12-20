import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class DictionaryNamespaceEntryByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.DictionaryNamespaceEntryByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.DictionaryNamespaceEntryByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.DictionaryNamespaceEntryByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.DictionaryNamespaceEntryByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.DictionaryNamespaceEntryByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.DictionaryNamespaceEntryByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DictionaryNamespaceEntryByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
