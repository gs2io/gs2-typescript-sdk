import IResult from '../../core/interface/IResult';
import * as Gs2JobQueue from '../model';
export default class GetJobByUserIdResult implements IResult {
    private item;
    getItem(): Gs2JobQueue.Job | null;
    setItem(item: Gs2JobQueue.Job | null): this;
    withItem(item: Gs2JobQueue.Job | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetJobByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
