import IModel from '../../core/interface/IModel';
export default class TimeSpan implements IModel {
    private days;
    private hours;
    private minutes;
    getDays(): number | null;
    setDays(days: number | null): this;
    withDays(days: number | null): this;
    getHours(): number | null;
    setHours(hours: number | null): this;
    withHours(hours: number | null): this;
    getMinutes(): number | null;
    setMinutes(minutes: number | null): this;
    withMinutes(minutes: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): TimeSpan | null;
    toDict(): {
        [key: string]: any;
    };
}
