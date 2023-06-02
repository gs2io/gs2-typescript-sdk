import IModel from '../../core/interface/IModel';
import EngagementHistory from './EngagementHistory';
import EngagementAverage from './EngagementAverage';
export default class Engagements implements IModel {
    private history;
    private avg;
    getHistory(): EngagementHistory[] | null;
    setHistory(history: EngagementHistory[] | null): this;
    withHistory(history: EngagementHistory[] | null): this;
    getAvg(): EngagementAverage | null;
    setAvg(avg: EngagementAverage | null): this;
    withAvg(avg: EngagementAverage | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Engagements | null;
    toDict(): {
        [key: string]: any;
    };
}
