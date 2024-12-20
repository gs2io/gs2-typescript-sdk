import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class DictionaryNamespaceEntryByNameDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.DictionaryNamespaceEntryByNameDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.DictionaryNamespaceEntryByNameDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.DictionaryNamespaceEntryByNameDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.DictionaryNamespaceEntryByNameDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.DictionaryNamespaceEntryByNameDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.DictionaryNamespaceEntryByNameDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DictionaryNamespaceEntryByNameDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
