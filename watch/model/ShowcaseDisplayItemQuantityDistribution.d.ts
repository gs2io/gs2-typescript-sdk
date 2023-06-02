import IModel from '../../core/interface/IModel';
import ShowcaseDisplayItemQuantityDistributionStatistics from './ShowcaseDisplayItemQuantityDistributionStatistics';
import ShowcaseDisplayItemQuantityDistributionSegment from './ShowcaseDisplayItemQuantityDistributionSegment';
export default class ShowcaseDisplayItemQuantityDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ShowcaseDisplayItemQuantityDistributionStatistics | null;
    setStatistics(statistics: ShowcaseDisplayItemQuantityDistributionStatistics | null): this;
    withStatistics(statistics: ShowcaseDisplayItemQuantityDistributionStatistics | null): this;
    getDistribution(): ShowcaseDisplayItemQuantityDistributionSegment[] | null;
    setDistribution(distribution: ShowcaseDisplayItemQuantityDistributionSegment[] | null): this;
    withDistribution(distribution: ShowcaseDisplayItemQuantityDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseDisplayItemQuantityDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
