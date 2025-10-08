import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class StaminaNamespaceConsumeDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.StaminaNamespaceConsumeDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.StaminaNamespaceConsumeDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.StaminaNamespaceConsumeDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.StaminaNamespaceConsumeDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.StaminaNamespaceConsumeDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.StaminaNamespaceConsumeDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaNamespaceConsumeDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
