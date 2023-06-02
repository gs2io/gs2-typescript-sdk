import IModel from '../../core/interface/IModel';
import FormationFormUsageDistributionStatistics from './FormationFormUsageDistributionStatistics';
import FormationFormUsageDistributionSegment from './FormationFormUsageDistributionSegment';
export default class FormationFormUsageDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): FormationFormUsageDistributionStatistics | null;
    setStatistics(statistics: FormationFormUsageDistributionStatistics | null): this;
    withStatistics(statistics: FormationFormUsageDistributionStatistics | null): this;
    getDistribution(): FormationFormUsageDistributionSegment[] | null;
    setDistribution(distribution: FormationFormUsageDistributionSegment[] | null): this;
    withDistribution(distribution: FormationFormUsageDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationFormUsageDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
