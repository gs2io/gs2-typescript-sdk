import IModel from '../../core/interface/IModel';
import FormationFormSlotDistributionStatistics from './FormationFormSlotDistributionStatistics';
import FormationFormSlotDistributionSegment from './FormationFormSlotDistributionSegment';
export default class FormationFormSlotDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): FormationFormSlotDistributionStatistics | null;
    setStatistics(statistics: FormationFormSlotDistributionStatistics | null): this;
    withStatistics(statistics: FormationFormSlotDistributionStatistics | null): this;
    getDistribution(): FormationFormSlotDistributionSegment[] | null;
    setDistribution(distribution: FormationFormSlotDistributionSegment[] | null): this;
    withDistribution(distribution: FormationFormSlotDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationFormSlotDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
