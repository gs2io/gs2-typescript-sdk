import IModel from '../../core/interface/IModel';
import ShowcaseShowcaseBuyDistributionStatistics from './ShowcaseShowcaseBuyDistributionStatistics';
import ShowcaseShowcaseBuyDistributionSegment from './ShowcaseShowcaseBuyDistributionSegment';
export default class ShowcaseShowcaseBuyDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ShowcaseShowcaseBuyDistributionStatistics | null;
    setStatistics(statistics: ShowcaseShowcaseBuyDistributionStatistics | null): this;
    withStatistics(statistics: ShowcaseShowcaseBuyDistributionStatistics | null): this;
    getDistribution(): ShowcaseShowcaseBuyDistributionSegment[] | null;
    setDistribution(distribution: ShowcaseShowcaseBuyDistributionSegment[] | null): this;
    withDistribution(distribution: ShowcaseShowcaseBuyDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseShowcaseBuyDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
