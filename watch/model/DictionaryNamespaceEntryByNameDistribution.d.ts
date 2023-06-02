import IModel from '../../core/interface/IModel';
import DictionaryNamespaceEntryByNameDistributionStatistics from './DictionaryNamespaceEntryByNameDistributionStatistics';
import DictionaryNamespaceEntryByNameDistributionSegment from './DictionaryNamespaceEntryByNameDistributionSegment';
export default class DictionaryNamespaceEntryByNameDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): DictionaryNamespaceEntryByNameDistributionStatistics | null;
    setStatistics(statistics: DictionaryNamespaceEntryByNameDistributionStatistics | null): this;
    withStatistics(statistics: DictionaryNamespaceEntryByNameDistributionStatistics | null): this;
    getDistribution(): DictionaryNamespaceEntryByNameDistributionSegment[] | null;
    setDistribution(distribution: DictionaryNamespaceEntryByNameDistributionSegment[] | null): this;
    withDistribution(distribution: DictionaryNamespaceEntryByNameDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DictionaryNamespaceEntryByNameDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
