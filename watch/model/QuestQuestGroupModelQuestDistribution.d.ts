import IModel from '../../core/interface/IModel';
import QuestQuestGroupModelQuestDistributionStatistics from './QuestQuestGroupModelQuestDistributionStatistics';
import QuestQuestGroupModelQuestDistributionSegment from './QuestQuestGroupModelQuestDistributionSegment';
export default class QuestQuestGroupModelQuestDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): QuestQuestGroupModelQuestDistributionStatistics | null;
    setStatistics(statistics: QuestQuestGroupModelQuestDistributionStatistics | null): this;
    withStatistics(statistics: QuestQuestGroupModelQuestDistributionStatistics | null): this;
    getDistribution(): QuestQuestGroupModelQuestDistributionSegment[] | null;
    setDistribution(distribution: QuestQuestGroupModelQuestDistributionSegment[] | null): this;
    withDistribution(distribution: QuestQuestGroupModelQuestDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestQuestGroupModelQuestDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
