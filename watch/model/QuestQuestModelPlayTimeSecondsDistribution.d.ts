import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class QuestQuestModelPlayTimeSecondsDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.QuestQuestModelPlayTimeSecondsDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.QuestQuestModelPlayTimeSecondsDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.QuestQuestModelPlayTimeSecondsDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.QuestQuestModelPlayTimeSecondsDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.QuestQuestModelPlayTimeSecondsDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.QuestQuestModelPlayTimeSecondsDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestQuestModelPlayTimeSecondsDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
