import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class StaminaStaminaModelConsumeDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.StaminaStaminaModelConsumeDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.StaminaStaminaModelConsumeDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.StaminaStaminaModelConsumeDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.StaminaStaminaModelConsumeDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.StaminaStaminaModelConsumeDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.StaminaStaminaModelConsumeDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaStaminaModelConsumeDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
