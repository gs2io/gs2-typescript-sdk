import IResult from '../../core/interface/IResult';
import * as Gs2JobQueue from '../model';
export default class GetDeadLetterJobByUserIdResult implements IResult {
    private item;
    getItem(): Gs2JobQueue.DeadLetterJob | null;
    setItem(item: Gs2JobQueue.DeadLetterJob | null): this;
    withItem(item: Gs2JobQueue.DeadLetterJob | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetDeadLetterJobByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
