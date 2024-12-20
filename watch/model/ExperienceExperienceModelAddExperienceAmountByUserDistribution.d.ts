import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ExperienceExperienceModelAddExperienceAmountByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceExperienceModelAddExperienceAmountByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
