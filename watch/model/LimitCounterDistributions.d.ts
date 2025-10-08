import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LimitCounterDistributions implements IModel {
    private counter;
    getCounter(): Gs2Watch.LimitCounterCounterDistribution | null;
    setCounter(counter: Gs2Watch.LimitCounterCounterDistribution | null): this;
    withCounter(counter: Gs2Watch.LimitCounterCounterDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitCounterDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
