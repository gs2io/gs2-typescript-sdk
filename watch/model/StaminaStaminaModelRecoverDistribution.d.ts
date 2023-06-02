import IModel from '../../core/interface/IModel';
import StaminaStaminaModelRecoverDistributionStatistics from './StaminaStaminaModelRecoverDistributionStatistics';
import StaminaStaminaModelRecoverDistributionSegment from './StaminaStaminaModelRecoverDistributionSegment';
export default class StaminaStaminaModelRecoverDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): StaminaStaminaModelRecoverDistributionStatistics | null;
    setStatistics(statistics: StaminaStaminaModelRecoverDistributionStatistics | null): this;
    withStatistics(statistics: StaminaStaminaModelRecoverDistributionStatistics | null): this;
    getDistribution(): StaminaStaminaModelRecoverDistributionSegment[] | null;
    setDistribution(distribution: StaminaStaminaModelRecoverDistributionSegment[] | null): this;
    withDistribution(distribution: StaminaStaminaModelRecoverDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaStaminaModelRecoverDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
