import IModel from '../../core/interface/IModel';
import GeneralDauWauMauHistory from './GeneralDauWauMauHistory';
import GeneralDauWauMauAverage from './GeneralDauWauMauAverage';
export default class GeneralDauWauMau implements IModel {
    private history;
    private avg;
    getHistory(): GeneralDauWauMauHistory[] | null;
    setHistory(history: GeneralDauWauMauHistory[] | null): this;
    withHistory(history: GeneralDauWauMauHistory[] | null): this;
    getAvg(): GeneralDauWauMauAverage | null;
    setAvg(avg: GeneralDauWauMauAverage | null): this;
    withAvg(avg: GeneralDauWauMauAverage | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GeneralDauWauMau | null;
    toDict(): {
        [key: string]: any;
    };
}
