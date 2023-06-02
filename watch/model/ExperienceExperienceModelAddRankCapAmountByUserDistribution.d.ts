import IModel from '../../core/interface/IModel';
import ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics from './ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics';
import ExperienceExperienceModelAddRankCapAmountByUserDistributionSegment from './ExperienceExperienceModelAddRankCapAmountByUserDistributionSegment';
export default class ExperienceExperienceModelAddRankCapAmountByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics | null;
    setStatistics(statistics: ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics | null): this;
    withStatistics(statistics: ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics | null): this;
    getDistribution(): ExperienceExperienceModelAddRankCapAmountByUserDistributionSegment[] | null;
    setDistribution(distribution: ExperienceExperienceModelAddRankCapAmountByUserDistributionSegment[] | null): this;
    withDistribution(distribution: ExperienceExperienceModelAddRankCapAmountByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceExperienceModelAddRankCapAmountByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
