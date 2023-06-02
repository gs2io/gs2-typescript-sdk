import IModel from '../../core/interface/IModel';
import QuestQuestModelPlayTimeSecondsDistributionStatistics from './QuestQuestModelPlayTimeSecondsDistributionStatistics';
import QuestQuestModelPlayTimeSecondsDistributionSegment from './QuestQuestModelPlayTimeSecondsDistributionSegment';
export default class QuestQuestModelPlayTimeSecondsDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): QuestQuestModelPlayTimeSecondsDistributionStatistics | null;
    setStatistics(statistics: QuestQuestModelPlayTimeSecondsDistributionStatistics | null): this;
    withStatistics(statistics: QuestQuestModelPlayTimeSecondsDistributionStatistics | null): this;
    getDistribution(): QuestQuestModelPlayTimeSecondsDistributionSegment[] | null;
    setDistribution(distribution: QuestQuestModelPlayTimeSecondsDistributionSegment[] | null): this;
    withDistribution(distribution: QuestQuestModelPlayTimeSecondsDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestQuestModelPlayTimeSecondsDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
