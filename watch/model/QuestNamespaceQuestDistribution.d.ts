import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class QuestNamespaceQuestDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.QuestNamespaceQuestDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.QuestNamespaceQuestDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.QuestNamespaceQuestDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.QuestNamespaceQuestDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.QuestNamespaceQuestDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.QuestNamespaceQuestDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestNamespaceQuestDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
