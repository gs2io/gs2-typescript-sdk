import IResult from '../../core/interface/IResult';
import * as Gs2Idle from '../model';
export default class DecreaseMaximumIdleMinutesByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Idle.Status | null;
    setItem(item: Gs2Idle.Status | null): this;
    withItem(item: Gs2Idle.Status | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DecreaseMaximumIdleMinutesByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
