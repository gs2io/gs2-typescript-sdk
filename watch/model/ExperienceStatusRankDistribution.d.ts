import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ExperienceStatusRankDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ExperienceStatusRankDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ExperienceStatusRankDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ExperienceStatusRankDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ExperienceStatusRankDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ExperienceStatusRankDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ExperienceStatusRankDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceStatusRankDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
