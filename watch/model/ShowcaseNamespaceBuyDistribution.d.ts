import IModel from '../../core/interface/IModel';
import ShowcaseNamespaceBuyDistributionStatistics from './ShowcaseNamespaceBuyDistributionStatistics';
import ShowcaseNamespaceBuyDistributionSegment from './ShowcaseNamespaceBuyDistributionSegment';
export default class ShowcaseNamespaceBuyDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ShowcaseNamespaceBuyDistributionStatistics | null;
    setStatistics(statistics: ShowcaseNamespaceBuyDistributionStatistics | null): this;
    withStatistics(statistics: ShowcaseNamespaceBuyDistributionStatistics | null): this;
    getDistribution(): ShowcaseNamespaceBuyDistributionSegment[] | null;
    setDistribution(distribution: ShowcaseNamespaceBuyDistributionSegment[] | null): this;
    withDistribution(distribution: ShowcaseNamespaceBuyDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseNamespaceBuyDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
