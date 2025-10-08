import IResult from '../../core/interface/IResult';
import * as Gs2JobQueue from '../model';
export default class DeleteByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2JobQueue.Job | null;
    setItem(item: Gs2JobQueue.Job | null): this;
    withItem(item: Gs2JobQueue.Job | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
