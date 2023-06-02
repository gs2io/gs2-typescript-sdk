import IModel from '../../core/interface/IModel';
import FormationMoldCapacityDistributionStatistics from './FormationMoldCapacityDistributionStatistics';
import FormationMoldCapacityDistributionSegment from './FormationMoldCapacityDistributionSegment';
export default class FormationMoldCapacityDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): FormationMoldCapacityDistributionStatistics | null;
    setStatistics(statistics: FormationMoldCapacityDistributionStatistics | null): this;
    withStatistics(statistics: FormationMoldCapacityDistributionStatistics | null): this;
    getDistribution(): FormationMoldCapacityDistributionSegment[] | null;
    setDistribution(distribution: FormationMoldCapacityDistributionSegment[] | null): this;
    withDistribution(distribution: FormationMoldCapacityDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationMoldCapacityDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
