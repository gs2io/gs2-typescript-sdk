import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class FormationNamespaceUpdateByMoldDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.FormationNamespaceUpdateByMoldDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.FormationNamespaceUpdateByMoldDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.FormationNamespaceUpdateByMoldDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.FormationNamespaceUpdateByMoldDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.FormationNamespaceUpdateByMoldDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.FormationNamespaceUpdateByMoldDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationNamespaceUpdateByMoldDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
