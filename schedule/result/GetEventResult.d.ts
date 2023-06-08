import IResult from '../../core/interface/IResult';
import * as Gs2Schedule from '../model';
export default class GetEventResult implements IResult {
    private item;
    private repeatCount;
    private inSchedule;
    private repeatSchedule;
    getItem(): Gs2Schedule.Event | null;
    setItem(item: Gs2Schedule.Event | null): this;
    withItem(item: Gs2Schedule.Event | null): this;
    getRepeatCount(): number | null;
    setRepeatCount(repeatCount: number | null): this;
    withRepeatCount(repeatCount: number | null): this;
    getInSchedule(): boolean | null;
    setInSchedule(inSchedule: boolean | null): this;
    withInSchedule(inSchedule: boolean | null): this;
    getRepeatSchedule(): Gs2Schedule.RepeatSchedule | null;
    setRepeatSchedule(repeatSchedule: Gs2Schedule.RepeatSchedule | null): this;
    withRepeatSchedule(repeatSchedule: Gs2Schedule.RepeatSchedule | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetEventResult;
    toDict(): {
        [key: string]: any;
    };
}
