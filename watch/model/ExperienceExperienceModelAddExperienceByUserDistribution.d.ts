import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ExperienceExperienceModelAddExperienceByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ExperienceExperienceModelAddExperienceByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ExperienceExperienceModelAddExperienceByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ExperienceExperienceModelAddExperienceByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ExperienceExperienceModelAddExperienceByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ExperienceExperienceModelAddExperienceByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ExperienceExperienceModelAddExperienceByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceExperienceModelAddExperienceByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
