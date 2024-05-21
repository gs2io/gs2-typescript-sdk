import IModel from '../../core/interface/IModel';
export default class RepeatSetting implements IModel {
    private repeatType;
    private beginDayOfMonth;
    private endDayOfMonth;
    private beginDayOfWeek;
    private endDayOfWeek;
    private beginHour;
    private endHour;
    getRepeatType(): string | null;
    setRepeatType(repeatType: string | null): this;
    withRepeatType(repeatType: string | null): this;
    getBeginDayOfMonth(): number | null;
    setBeginDayOfMonth(beginDayOfMonth: number | null): this;
    withBeginDayOfMonth(beginDayOfMonth: number | null): this;
    getEndDayOfMonth(): number | null;
    setEndDayOfMonth(endDayOfMonth: number | null): this;
    withEndDayOfMonth(endDayOfMonth: number | null): this;
    getBeginDayOfWeek(): string | null;
    setBeginDayOfWeek(beginDayOfWeek: string | null): this;
    withBeginDayOfWeek(beginDayOfWeek: string | null): this;
    getEndDayOfWeek(): string | null;
    setEndDayOfWeek(endDayOfWeek: string | null): this;
    withEndDayOfWeek(endDayOfWeek: string | null): this;
    getBeginHour(): number | null;
    setBeginHour(beginHour: number | null): this;
    withBeginHour(beginHour: number | null): this;
    getEndHour(): number | null;
    setEndHour(endHour: number | null): this;
    withEndHour(endHour: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RepeatSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
