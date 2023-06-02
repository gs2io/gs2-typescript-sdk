import IModel from '../../core/interface/IModel';
import ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics from './ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics';
import ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment from './ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment';
export default class ExperienceExperienceModelAddExperienceAmountByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics | null;
    setStatistics(statistics: ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics | null): this;
    withStatistics(statistics: ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics | null): this;
    getDistribution(): ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment[] | null;
    setDistribution(distribution: ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment[] | null): this;
    withDistribution(distribution: ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceExperienceModelAddExperienceAmountByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
