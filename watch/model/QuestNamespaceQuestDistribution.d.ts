import IModel from '../../core/interface/IModel';
import QuestNamespaceQuestDistributionStatistics from './QuestNamespaceQuestDistributionStatistics';
import QuestNamespaceQuestDistributionSegment from './QuestNamespaceQuestDistributionSegment';
export default class QuestNamespaceQuestDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): QuestNamespaceQuestDistributionStatistics | null;
    setStatistics(statistics: QuestNamespaceQuestDistributionStatistics | null): this;
    withStatistics(statistics: QuestNamespaceQuestDistributionStatistics | null): this;
    getDistribution(): QuestNamespaceQuestDistributionSegment[] | null;
    setDistribution(distribution: QuestNamespaceQuestDistributionSegment[] | null): this;
    withDistribution(distribution: QuestNamespaceQuestDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestNamespaceQuestDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
