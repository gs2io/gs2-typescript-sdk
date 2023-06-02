import IModel from '../../core/interface/IModel';
import FormationNamespaceUpdateByMoldDistributionStatistics from './FormationNamespaceUpdateByMoldDistributionStatistics';
import FormationNamespaceUpdateByMoldDistributionSegment from './FormationNamespaceUpdateByMoldDistributionSegment';
export default class FormationNamespaceUpdateByMoldDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): FormationNamespaceUpdateByMoldDistributionStatistics | null;
    setStatistics(statistics: FormationNamespaceUpdateByMoldDistributionStatistics | null): this;
    withStatistics(statistics: FormationNamespaceUpdateByMoldDistributionStatistics | null): this;
    getDistribution(): FormationNamespaceUpdateByMoldDistributionSegment[] | null;
    setDistribution(distribution: FormationNamespaceUpdateByMoldDistributionSegment[] | null): this;
    withDistribution(distribution: FormationNamespaceUpdateByMoldDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationNamespaceUpdateByMoldDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
