import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class QuestQuestGroupModelQuestDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.QuestQuestGroupModelQuestDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.QuestQuestGroupModelQuestDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.QuestQuestGroupModelQuestDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.QuestQuestGroupModelQuestDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.QuestQuestGroupModelQuestDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.QuestQuestGroupModelQuestDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestQuestGroupModelQuestDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
