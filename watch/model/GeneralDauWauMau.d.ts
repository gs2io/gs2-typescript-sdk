import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class GeneralDauWauMau implements IModel {
    private history;
    private avg;
    getHistory(): Gs2Watch.GeneralDauWauMauHistory[] | null;
    setHistory(history: Gs2Watch.GeneralDauWauMauHistory[] | null): this;
    withHistory(history: Gs2Watch.GeneralDauWauMauHistory[] | null): this;
    getAvg(): Gs2Watch.GeneralDauWauMauAverage | null;
    setAvg(avg: Gs2Watch.GeneralDauWauMauAverage | null): this;
    withAvg(avg: Gs2Watch.GeneralDauWauMauAverage | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GeneralDauWauMau | null;
    toDict(): {
        [key: string]: any;
    };
}
