import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ExperienceNamespaceAddRankCapByExperienceDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ExperienceNamespaceAddRankCapByExperienceDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ExperienceNamespaceAddRankCapByExperienceDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ExperienceNamespaceAddRankCapByExperienceDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ExperienceNamespaceAddRankCapByExperienceDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ExperienceNamespaceAddRankCapByExperienceDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ExperienceNamespaceAddRankCapByExperienceDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceNamespaceAddRankCapByExperienceDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
