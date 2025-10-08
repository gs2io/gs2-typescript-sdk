import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ChurnRateAggregate implements IModel {
    private history;
    private avg;
    getHistory(): Gs2Watch.ChurnRateHistory[] | null;
    setHistory(history: Gs2Watch.ChurnRateHistory[] | null): this;
    withHistory(history: Gs2Watch.ChurnRateHistory[] | null): this;
    getAvg(): Gs2Watch.ChurnRateAverage | null;
    setAvg(avg: Gs2Watch.ChurnRateAverage | null): this;
    withAvg(avg: Gs2Watch.ChurnRateAverage | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChurnRateAggregate | null;
    toDict(): {
        [key: string]: any;
    };
}
