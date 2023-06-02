import IModel from '../../core/interface/IModel';
import ExperienceNamespaceAddExperienceByExperienceDistributionStatistics from './ExperienceNamespaceAddExperienceByExperienceDistributionStatistics';
import ExperienceNamespaceAddExperienceByExperienceDistributionSegment from './ExperienceNamespaceAddExperienceByExperienceDistributionSegment';
export default class ExperienceNamespaceAddExperienceByExperienceDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ExperienceNamespaceAddExperienceByExperienceDistributionStatistics | null;
    setStatistics(statistics: ExperienceNamespaceAddExperienceByExperienceDistributionStatistics | null): this;
    withStatistics(statistics: ExperienceNamespaceAddExperienceByExperienceDistributionStatistics | null): this;
    getDistribution(): ExperienceNamespaceAddExperienceByExperienceDistributionSegment[] | null;
    setDistribution(distribution: ExperienceNamespaceAddExperienceByExperienceDistributionSegment[] | null): this;
    withDistribution(distribution: ExperienceNamespaceAddExperienceByExperienceDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceNamespaceAddExperienceByExperienceDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
