import IModel from '../../core/interface/IModel';
export default class CounterScopeModel implements IModel {
    private resetType;
    private resetDayOfMonth;
    private resetDayOfWeek;
    private resetHour;
    getResetType(): string | null;
    setResetType(resetType: string | null): this;
    withResetType(resetType: string | null): this;
    getResetDayOfMonth(): number | null;
    setResetDayOfMonth(resetDayOfMonth: number | null): this;
    withResetDayOfMonth(resetDayOfMonth: number | null): this;
    getResetDayOfWeek(): string | null;
    setResetDayOfWeek(resetDayOfWeek: string | null): this;
    withResetDayOfWeek(resetDayOfWeek: string | null): this;
    getResetHour(): number | null;
    setResetHour(resetHour: number | null): this;
    withResetHour(resetHour: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CounterScopeModel | null;
    toDict(): {
        [key: string]: any;
    };
}
