import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class StaminaStaminaModelRecoverDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.StaminaStaminaModelRecoverDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.StaminaStaminaModelRecoverDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.StaminaStaminaModelRecoverDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.StaminaStaminaModelRecoverDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.StaminaStaminaModelRecoverDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.StaminaStaminaModelRecoverDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaStaminaModelRecoverDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
