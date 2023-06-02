import IModel from '../../core/interface/IModel';
import ExperienceExperienceModelAddRankCapByUserDistributionStatistics from './ExperienceExperienceModelAddRankCapByUserDistributionStatistics';
import ExperienceExperienceModelAddRankCapByUserDistributionSegment from './ExperienceExperienceModelAddRankCapByUserDistributionSegment';
export default class ExperienceExperienceModelAddRankCapByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ExperienceExperienceModelAddRankCapByUserDistributionStatistics | null;
    setStatistics(statistics: ExperienceExperienceModelAddRankCapByUserDistributionStatistics | null): this;
    withStatistics(statistics: ExperienceExperienceModelAddRankCapByUserDistributionStatistics | null): this;
    getDistribution(): ExperienceExperienceModelAddRankCapByUserDistributionSegment[] | null;
    setDistribution(distribution: ExperienceExperienceModelAddRankCapByUserDistributionSegment[] | null): this;
    withDistribution(distribution: ExperienceExperienceModelAddRankCapByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceExperienceModelAddRankCapByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
