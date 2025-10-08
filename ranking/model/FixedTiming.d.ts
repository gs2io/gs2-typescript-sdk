import IModel from '../../core/interface/IModel';
export default class FixedTiming implements IModel {
    private hour;
    private minute;
    getHour(): number | null;
    setHour(hour: number | null): this;
    withHour(hour: number | null): this;
    getMinute(): number | null;
    setMinute(minute: number | null): this;
    withMinute(minute: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FixedTiming | null;
    toDict(): {
        [key: string]: any;
    };
}
