import IModel from '../../core/interface/IModel';
import ChurnRateHistory from './ChurnRateHistory';
import ChurnRateAverage from './ChurnRateAverage';
export default class ChurnRateAggregate implements IModel {
    private history;
    private avg;
    getHistory(): ChurnRateHistory[] | null;
    setHistory(history: ChurnRateHistory[] | null): this;
    withHistory(history: ChurnRateHistory[] | null): this;
    getAvg(): ChurnRateAverage | null;
    setAvg(avg: ChurnRateAverage | null): this;
    withAvg(avg: ChurnRateAverage | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChurnRateAggregate | null;
    toDict(): {
        [key: string]: any;
    };
}
