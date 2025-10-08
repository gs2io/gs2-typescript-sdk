import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ShowcaseNamespaceBuyDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ShowcaseNamespaceBuyDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ShowcaseNamespaceBuyDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ShowcaseNamespaceBuyDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ShowcaseNamespaceBuyDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ShowcaseNamespaceBuyDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ShowcaseNamespaceBuyDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseNamespaceBuyDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
