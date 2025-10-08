import IResult from '../../core/interface/IResult';
import * as Gs2Idle from '../model';
export default class SetMaximumIdleMinutesByStampSheetResult implements IResult {
    private item;
    getItem(): Gs2Idle.Status | null;
    setItem(item: Gs2Idle.Status | null): this;
    withItem(item: Gs2Idle.Status | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetMaximumIdleMinutesByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
