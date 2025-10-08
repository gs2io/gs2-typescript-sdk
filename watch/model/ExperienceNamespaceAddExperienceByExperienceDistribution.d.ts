import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ExperienceNamespaceAddExperienceByExperienceDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ExperienceNamespaceAddExperienceByExperienceDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ExperienceNamespaceAddExperienceByExperienceDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ExperienceNamespaceAddExperienceByExperienceDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ExperienceNamespaceAddExperienceByExperienceDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ExperienceNamespaceAddExperienceByExperienceDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ExperienceNamespaceAddExperienceByExperienceDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceNamespaceAddExperienceByExperienceDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
