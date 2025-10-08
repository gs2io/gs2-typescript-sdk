import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class FormationMoldCapacityDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.FormationMoldCapacityDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.FormationMoldCapacityDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.FormationMoldCapacityDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.FormationMoldCapacityDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.FormationMoldCapacityDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.FormationMoldCapacityDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationMoldCapacityDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
