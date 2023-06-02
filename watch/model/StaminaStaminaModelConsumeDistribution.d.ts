import IModel from '../../core/interface/IModel';
import StaminaStaminaModelConsumeDistributionStatistics from './StaminaStaminaModelConsumeDistributionStatistics';
import StaminaStaminaModelConsumeDistributionSegment from './StaminaStaminaModelConsumeDistributionSegment';
export default class StaminaStaminaModelConsumeDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): StaminaStaminaModelConsumeDistributionStatistics | null;
    setStatistics(statistics: StaminaStaminaModelConsumeDistributionStatistics | null): this;
    withStatistics(statistics: StaminaStaminaModelConsumeDistributionStatistics | null): this;
    getDistribution(): StaminaStaminaModelConsumeDistributionSegment[] | null;
    setDistribution(distribution: StaminaStaminaModelConsumeDistributionSegment[] | null): this;
    withDistribution(distribution: StaminaStaminaModelConsumeDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaStaminaModelConsumeDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
