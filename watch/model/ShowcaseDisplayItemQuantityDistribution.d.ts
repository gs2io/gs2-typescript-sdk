import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ShowcaseDisplayItemQuantityDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ShowcaseDisplayItemQuantityDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ShowcaseDisplayItemQuantityDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ShowcaseDisplayItemQuantityDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ShowcaseDisplayItemQuantityDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ShowcaseDisplayItemQuantityDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ShowcaseDisplayItemQuantityDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseDisplayItemQuantityDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
