import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MissionCounterDistributions implements IModel {
    private counter;
    getCounter(): Gs2Watch.MissionCounterCounterDistribution | null;
    setCounter(counter: Gs2Watch.MissionCounterCounterDistribution | null): this;
    withCounter(counter: Gs2Watch.MissionCounterCounterDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionCounterDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
