import IModel from '../../core/interface/IModel';
import ExperienceExperienceModelAddExperienceByUserDistributionStatistics from './ExperienceExperienceModelAddExperienceByUserDistributionStatistics';
import ExperienceExperienceModelAddExperienceByUserDistributionSegment from './ExperienceExperienceModelAddExperienceByUserDistributionSegment';
export default class ExperienceExperienceModelAddExperienceByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ExperienceExperienceModelAddExperienceByUserDistributionStatistics | null;
    setStatistics(statistics: ExperienceExperienceModelAddExperienceByUserDistributionStatistics | null): this;
    withStatistics(statistics: ExperienceExperienceModelAddExperienceByUserDistributionStatistics | null): this;
    getDistribution(): ExperienceExperienceModelAddExperienceByUserDistributionSegment[] | null;
    setDistribution(distribution: ExperienceExperienceModelAddExperienceByUserDistributionSegment[] | null): this;
    withDistribution(distribution: ExperienceExperienceModelAddExperienceByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceExperienceModelAddExperienceByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
