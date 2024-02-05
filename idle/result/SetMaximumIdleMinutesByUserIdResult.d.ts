import IResult from '../../core/interface/IResult';
import * as Gs2Idle from '../model';
export default class SetMaximumIdleMinutesByUserIdResult implements IResult {
    private item;
    private old;
    getItem(): Gs2Idle.Status | null;
    setItem(item: Gs2Idle.Status | null): this;
    withItem(item: Gs2Idle.Status | null): this;
    getOld(): Gs2Idle.Status | null;
    setOld(old: Gs2Idle.Status | null): this;
    withOld(old: Gs2Idle.Status | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetMaximumIdleMinutesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
