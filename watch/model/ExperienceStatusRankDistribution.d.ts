import IModel from '../../core/interface/IModel';
import ExperienceStatusRankDistributionStatistics from './ExperienceStatusRankDistributionStatistics';
import ExperienceStatusRankDistributionSegment from './ExperienceStatusRankDistributionSegment';
export default class ExperienceStatusRankDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ExperienceStatusRankDistributionStatistics | null;
    setStatistics(statistics: ExperienceStatusRankDistributionStatistics | null): this;
    withStatistics(statistics: ExperienceStatusRankDistributionStatistics | null): this;
    getDistribution(): ExperienceStatusRankDistributionSegment[] | null;
    setDistribution(distribution: ExperienceStatusRankDistributionSegment[] | null): this;
    withDistribution(distribution: ExperienceStatusRankDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceStatusRankDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
