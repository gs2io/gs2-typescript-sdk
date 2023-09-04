import IResult from '../../core/interface/IResult';
import * as Gs2Schedule from '../model';
export default class TriggerByStampSheetResult implements IResult {
    private item;
    getItem(): Gs2Schedule.Trigger | null;
    setItem(item: Gs2Schedule.Trigger | null): this;
    withItem(item: Gs2Schedule.Trigger | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): TriggerByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
