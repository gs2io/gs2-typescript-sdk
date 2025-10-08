import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class Engagements implements IModel {
    private history;
    private avg;
    getHistory(): Gs2Watch.EngagementHistory[] | null;
    setHistory(history: Gs2Watch.EngagementHistory[] | null): this;
    withHistory(history: Gs2Watch.EngagementHistory[] | null): this;
    getAvg(): Gs2Watch.EngagementAverage | null;
    setAvg(avg: Gs2Watch.EngagementAverage | null): this;
    withAvg(avg: Gs2Watch.EngagementAverage | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Engagements | null;
    toDict(): {
        [key: string]: any;
    };
}
