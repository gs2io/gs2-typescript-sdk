import IResult from '../../core/interface/IResult';
import * as Gs2JobQueue from '../model';
export default class GetJobResultByUserIdResult implements IResult {
    private item;
    getItem(): Gs2JobQueue.JobResult | null;
    setItem(item: Gs2JobQueue.JobResult | null): this;
    withItem(item: Gs2JobQueue.JobResult | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetJobResultByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
