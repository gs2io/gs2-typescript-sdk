import IModel from '../../core/interface/IModel';
import LimitCounterDistributionUsage from './LimitCounterDistributionUsage';
export default class LimitCounterDistribution implements IModel {
    private maxValue;
    private usage;
    getMaxValue(): number | null;
    setMaxValue(maxValue: number | null): this;
    withMaxValue(maxValue: number | null): this;
    getUsage(): LimitCounterDistributionUsage[] | null;
    setUsage(usage: LimitCounterDistributionUsage[] | null): this;
    withUsage(usage: LimitCounterDistributionUsage[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitCounterDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
