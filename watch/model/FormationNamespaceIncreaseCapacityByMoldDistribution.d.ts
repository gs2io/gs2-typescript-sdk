import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class FormationNamespaceIncreaseCapacityByMoldDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.FormationNamespaceIncreaseCapacityByMoldDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.FormationNamespaceIncreaseCapacityByMoldDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.FormationNamespaceIncreaseCapacityByMoldDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.FormationNamespaceIncreaseCapacityByMoldDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.FormationNamespaceIncreaseCapacityByMoldDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.FormationNamespaceIncreaseCapacityByMoldDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationNamespaceIncreaseCapacityByMoldDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
