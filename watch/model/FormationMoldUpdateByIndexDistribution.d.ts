import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class FormationMoldUpdateByIndexDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.FormationMoldUpdateByIndexDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.FormationMoldUpdateByIndexDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.FormationMoldUpdateByIndexDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.FormationMoldUpdateByIndexDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.FormationMoldUpdateByIndexDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.FormationMoldUpdateByIndexDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationMoldUpdateByIndexDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
