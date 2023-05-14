import IModel from '../../core/interface/IModel';
export default class WeeklyActiveUsers implements IModel {
    private last;
    private fromSunday;
    private fromMonday;
    getLast(): number | null;
    setLast(last: number | null): this;
    withLast(last: number | null): this;
    getFromSunday(): number | null;
    setFromSunday(fromSunday: number | null): this;
    withFromSunday(fromSunday: number | null): this;
    getFromMonday(): number | null;
    setFromMonday(fromMonday: number | null): this;
    withFromMonday(fromMonday: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WeeklyActiveUsers | null;
    toDict(): {
        [key: string]: any;
    };
}
