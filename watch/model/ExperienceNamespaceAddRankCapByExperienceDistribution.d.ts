import IModel from '../../core/interface/IModel';
import ExperienceNamespaceAddRankCapByExperienceDistributionStatistics from './ExperienceNamespaceAddRankCapByExperienceDistributionStatistics';
import ExperienceNamespaceAddRankCapByExperienceDistributionSegment from './ExperienceNamespaceAddRankCapByExperienceDistributionSegment';
export default class ExperienceNamespaceAddRankCapByExperienceDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ExperienceNamespaceAddRankCapByExperienceDistributionStatistics | null;
    setStatistics(statistics: ExperienceNamespaceAddRankCapByExperienceDistributionStatistics | null): this;
    withStatistics(statistics: ExperienceNamespaceAddRankCapByExperienceDistributionStatistics | null): this;
    getDistribution(): ExperienceNamespaceAddRankCapByExperienceDistributionSegment[] | null;
    setDistribution(distribution: ExperienceNamespaceAddRankCapByExperienceDistributionSegment[] | null): this;
    withDistribution(distribution: ExperienceNamespaceAddRankCapByExperienceDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceNamespaceAddRankCapByExperienceDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
