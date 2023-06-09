import IResult from '../../core/interface/IResult';
import * as Gs2Idle from '../model';
export default class IncreaseMaximumIdleMinutesByStampSheetResult implements IResult {
    private item;
    getItem(): Gs2Idle.Status | null;
    setItem(item: Gs2Idle.Status | null): this;
    withItem(item: Gs2Idle.Status | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IncreaseMaximumIdleMinutesByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
