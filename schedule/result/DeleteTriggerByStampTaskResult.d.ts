import IResult from '../../core/interface/IResult';
import * as Gs2Schedule from '../model';
export default class DeleteTriggerByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Schedule.Trigger | null;
    setItem(item: Gs2Schedule.Trigger | null): this;
    withItem(item: Gs2Schedule.Trigger | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteTriggerByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
