import IModel from '../../core/interface/IModel';
import ExperienceStatusRankCapDistributionStatistics from './ExperienceStatusRankCapDistributionStatistics';
import ExperienceStatusRankCapDistributionSegment from './ExperienceStatusRankCapDistributionSegment';
export default class ExperienceStatusRankCapDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ExperienceStatusRankCapDistributionStatistics | null;
    setStatistics(statistics: ExperienceStatusRankCapDistributionStatistics | null): this;
    withStatistics(statistics: ExperienceStatusRankCapDistributionStatistics | null): this;
    getDistribution(): ExperienceStatusRankCapDistributionSegment[] | null;
    setDistribution(distribution: ExperienceStatusRankCapDistributionSegment[] | null): this;
    withDistribution(distribution: ExperienceStatusRankCapDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceStatusRankCapDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
