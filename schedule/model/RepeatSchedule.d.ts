import IModel from '../../core/interface/IModel';
export default class RepeatSchedule implements IModel {
    private repeatCount;
    private currentRepeatStartAt;
    private currentRepeatEndAt;
    private lastRepeatEndAt;
    private nextRepeatStartAt;
    getRepeatCount(): number | null;
    setRepeatCount(repeatCount: number | null): this;
    withRepeatCount(repeatCount: number | null): this;
    getCurrentRepeatStartAt(): number | null;
    setCurrentRepeatStartAt(currentRepeatStartAt: number | null): this;
    withCurrentRepeatStartAt(currentRepeatStartAt: number | null): this;
    getCurrentRepeatEndAt(): number | null;
    setCurrentRepeatEndAt(currentRepeatEndAt: number | null): this;
    withCurrentRepeatEndAt(currentRepeatEndAt: number | null): this;
    getLastRepeatEndAt(): number | null;
    setLastRepeatEndAt(lastRepeatEndAt: number | null): this;
    withLastRepeatEndAt(lastRepeatEndAt: number | null): this;
    getNextRepeatStartAt(): number | null;
    setNextRepeatStartAt(nextRepeatStartAt: number | null): this;
    withNextRepeatStartAt(nextRepeatStartAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RepeatSchedule | null;
    toDict(): {
        [key: string]: any;
    };
}
