import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class StaminaNamespaceRecoverDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.StaminaNamespaceRecoverDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.StaminaNamespaceRecoverDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.StaminaNamespaceRecoverDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.StaminaNamespaceRecoverDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.StaminaNamespaceRecoverDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.StaminaNamespaceRecoverDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaNamespaceRecoverDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
