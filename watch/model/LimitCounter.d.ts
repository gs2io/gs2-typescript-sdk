import IModel from '../../core/interface/IModel';
import LimitCounterDistribution from './LimitCounterDistribution';
export default class LimitCounter implements IModel {
    private counterName;
    private distribution;
    getCounterName(): string | null;
    setCounterName(counterName: string | null): this;
    withCounterName(counterName: string | null): this;
    getDistribution(): LimitCounterDistribution[] | null;
    setDistribution(distribution: LimitCounterDistribution[] | null): this;
    withDistribution(distribution: LimitCounterDistribution[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitCounter | null;
    toDict(): {
        [key: string]: any;
    };
}
