import IModel from '../../core/interface/IModel';
import * as Gs2Log from '../../log/model';
export default class TimeseriesPoint implements IModel {
    private timestamp;
    private values;
    getTimestamp(): number | null;
    setTimestamp(timestamp: number | null): this;
    withTimestamp(timestamp: number | null): this;
    getValues(): Gs2Log.TimeseriesValue[] | null;
    setValues(values: Gs2Log.TimeseriesValue[] | null): this;
    withValues(values: Gs2Log.TimeseriesValue[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): TimeseriesPoint | null;
    toDict(): {
        [key: string]: any;
    };
}
