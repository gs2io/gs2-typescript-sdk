import IModel from '../../core/interface/IModel';
import FormationMoldUpdateByIndexDistributionStatistics from './FormationMoldUpdateByIndexDistributionStatistics';
import FormationMoldUpdateByIndexDistributionSegment from './FormationMoldUpdateByIndexDistributionSegment';
export default class FormationMoldUpdateByIndexDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): FormationMoldUpdateByIndexDistributionStatistics | null;
    setStatistics(statistics: FormationMoldUpdateByIndexDistributionStatistics | null): this;
    withStatistics(statistics: FormationMoldUpdateByIndexDistributionStatistics | null): this;
    getDistribution(): FormationMoldUpdateByIndexDistributionSegment[] | null;
    setDistribution(distribution: FormationMoldUpdateByIndexDistributionSegment[] | null): this;
    withDistribution(distribution: FormationMoldUpdateByIndexDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationMoldUpdateByIndexDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
