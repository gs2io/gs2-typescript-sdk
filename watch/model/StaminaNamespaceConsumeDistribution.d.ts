import IModel from '../../core/interface/IModel';
import StaminaNamespaceConsumeDistributionStatistics from './StaminaNamespaceConsumeDistributionStatistics';
import StaminaNamespaceConsumeDistributionSegment from './StaminaNamespaceConsumeDistributionSegment';
export default class StaminaNamespaceConsumeDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): StaminaNamespaceConsumeDistributionStatistics | null;
    setStatistics(statistics: StaminaNamespaceConsumeDistributionStatistics | null): this;
    withStatistics(statistics: StaminaNamespaceConsumeDistributionStatistics | null): this;
    getDistribution(): StaminaNamespaceConsumeDistributionSegment[] | null;
    setDistribution(distribution: StaminaNamespaceConsumeDistributionSegment[] | null): this;
    withDistribution(distribution: StaminaNamespaceConsumeDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaNamespaceConsumeDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
