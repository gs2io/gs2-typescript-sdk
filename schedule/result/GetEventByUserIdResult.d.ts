import IResult from '../../core/interface/IResult';
import * as Gs2Schedule from '../model';
export default class GetEventByUserIdResult implements IResult {
    private item;
    private repeatCount;
    getItem(): Gs2Schedule.Event | null;
    setItem(item: Gs2Schedule.Event | null): this;
    withItem(item: Gs2Schedule.Event | null): this;
    getRepeatCount(): number | null;
    setRepeatCount(repeatCount: number | null): this;
    withRepeatCount(repeatCount: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetEventByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
