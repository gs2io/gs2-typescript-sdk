import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ExperienceExperienceModelAddRankCapAmountByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ExperienceExperienceModelAddRankCapAmountByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ExperienceExperienceModelAddRankCapAmountByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ExperienceExperienceModelAddRankCapAmountByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceExperienceModelAddRankCapAmountByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
