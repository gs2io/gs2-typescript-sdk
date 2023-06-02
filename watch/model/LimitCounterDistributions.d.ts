import IModel from '../../core/interface/IModel';
import LimitCounterCounterDistribution from './LimitCounterCounterDistribution';
export default class LimitCounterDistributions implements IModel {
    private counter;
    getCounter(): LimitCounterCounterDistribution | null;
    setCounter(counter: LimitCounterCounterDistribution | null): this;
    withCounter(counter: LimitCounterCounterDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitCounterDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
