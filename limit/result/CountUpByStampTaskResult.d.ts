import IResult from '../../core/interface/IResult';
import * as Gs2Limit from '../model';
export default class CountUpByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Limit.Counter | null;
    setItem(item: Gs2Limit.Counter | null): this;
    withItem(item: Gs2Limit.Counter | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CountUpByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
