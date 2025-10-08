import IModel from '../../core/interface/IModel';
export default class MonthlyActiveUsers implements IModel {
    private last;
    private fromFirstDay;
    getLast(): number | null;
    setLast(last: number | null): this;
    withLast(last: number | null): this;
    getFromFirstDay(): number | null;
    setFromFirstDay(fromFirstDay: number | null): this;
    withFromFirstDay(fromFirstDay: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MonthlyActiveUsers | null;
    toDict(): {
        [key: string]: any;
    };
}
