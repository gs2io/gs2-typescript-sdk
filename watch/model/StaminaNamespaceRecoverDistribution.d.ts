import IModel from '../../core/interface/IModel';
import StaminaNamespaceRecoverDistributionStatistics from './StaminaNamespaceRecoverDistributionStatistics';
import StaminaNamespaceRecoverDistributionSegment from './StaminaNamespaceRecoverDistributionSegment';
export default class StaminaNamespaceRecoverDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): StaminaNamespaceRecoverDistributionStatistics | null;
    setStatistics(statistics: StaminaNamespaceRecoverDistributionStatistics | null): this;
    withStatistics(statistics: StaminaNamespaceRecoverDistributionStatistics | null): this;
    getDistribution(): StaminaNamespaceRecoverDistributionSegment[] | null;
    setDistribution(distribution: StaminaNamespaceRecoverDistributionSegment[] | null): this;
    withDistribution(distribution: StaminaNamespaceRecoverDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaNamespaceRecoverDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
