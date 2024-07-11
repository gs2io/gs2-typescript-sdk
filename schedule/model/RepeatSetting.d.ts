import IModel from '../../core/interface/IModel';
export default class RepeatSetting implements IModel {
    private repeatType;
    private beginDayOfMonth;
    private endDayOfMonth;
    private beginDayOfWeek;
    private endDayOfWeek;
    private beginHour;
    private endHour;
    private anchorTimestamp;
    private activeDays;
    private inactiveDays;
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
    getAnchorTimestamp(): number | null;
    setAnchorTimestamp(anchorTimestamp: number | null): this;
    withAnchorTimestamp(anchorTimestamp: number | null): this;
    getActiveDays(): number | null;
    setActiveDays(activeDays: number | null): this;
    withActiveDays(activeDays: number | null): this;
    getInactiveDays(): number | null;
    setInactiveDays(inactiveDays: number | null): this;
    withInactiveDays(inactiveDays: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RepeatSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
