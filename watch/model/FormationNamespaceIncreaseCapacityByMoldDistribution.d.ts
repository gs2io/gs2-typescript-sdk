import IModel from '../../core/interface/IModel';
import FormationNamespaceIncreaseCapacityByMoldDistributionStatistics from './FormationNamespaceIncreaseCapacityByMoldDistributionStatistics';
import FormationNamespaceIncreaseCapacityByMoldDistributionSegment from './FormationNamespaceIncreaseCapacityByMoldDistributionSegment';
export default class FormationNamespaceIncreaseCapacityByMoldDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): FormationNamespaceIncreaseCapacityByMoldDistributionStatistics | null;
    setStatistics(statistics: FormationNamespaceIncreaseCapacityByMoldDistributionStatistics | null): this;
    withStatistics(statistics: FormationNamespaceIncreaseCapacityByMoldDistributionStatistics | null): this;
    getDistribution(): FormationNamespaceIncreaseCapacityByMoldDistributionSegment[] | null;
    setDistribution(distribution: FormationNamespaceIncreaseCapacityByMoldDistributionSegment[] | null): this;
    withDistribution(distribution: FormationNamespaceIncreaseCapacityByMoldDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationNamespaceIncreaseCapacityByMoldDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
