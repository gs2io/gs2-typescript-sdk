import IModel from '../../core/interface/IModel';
import DictionaryNamespaceEntryByUserDistributionStatistics from './DictionaryNamespaceEntryByUserDistributionStatistics';
import DictionaryNamespaceEntryByUserDistributionSegment from './DictionaryNamespaceEntryByUserDistributionSegment';
export default class DictionaryNamespaceEntryByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): DictionaryNamespaceEntryByUserDistributionStatistics | null;
    setStatistics(statistics: DictionaryNamespaceEntryByUserDistributionStatistics | null): this;
    withStatistics(statistics: DictionaryNamespaceEntryByUserDistributionStatistics | null): this;
    getDistribution(): DictionaryNamespaceEntryByUserDistributionSegment[] | null;
    setDistribution(distribution: DictionaryNamespaceEntryByUserDistributionSegment[] | null): this;
    withDistribution(distribution: DictionaryNamespaceEntryByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DictionaryNamespaceEntryByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
