import IResult from '../../core/interface/IResult';
import * as Gs2Schedule from '../model';
export default class GetTriggerByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Schedule.Trigger | null;
    setItem(item: Gs2Schedule.Trigger | null): this;
    withItem(item: Gs2Schedule.Trigger | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetTriggerByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
