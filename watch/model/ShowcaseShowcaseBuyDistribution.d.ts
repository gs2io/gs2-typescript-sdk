import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ShowcaseShowcaseBuyDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ShowcaseShowcaseBuyDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ShowcaseShowcaseBuyDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ShowcaseShowcaseBuyDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ShowcaseShowcaseBuyDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ShowcaseShowcaseBuyDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ShowcaseShowcaseBuyDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseShowcaseBuyDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
