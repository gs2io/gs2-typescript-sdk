import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ExperienceExperienceModelAddRankCapByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ExperienceExperienceModelAddRankCapByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ExperienceExperienceModelAddRankCapByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ExperienceExperienceModelAddRankCapByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ExperienceExperienceModelAddRankCapByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ExperienceExperienceModelAddRankCapByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ExperienceExperienceModelAddRankCapByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceExperienceModelAddRankCapByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
