import IResult from '../../core/interface/IResult';
import * as Gs2JobQueue from '../model';
export default class RunByUserIdResult implements IResult {
    private item;
    private result;
    private isLastJob;
    getItem(): Gs2JobQueue.Job | null;
    setItem(item: Gs2JobQueue.Job | null): this;
    withItem(item: Gs2JobQueue.Job | null): this;
    getResult(): Gs2JobQueue.JobResultBody | null;
    setResult(result: Gs2JobQueue.JobResultBody | null): this;
    withResult(result: Gs2JobQueue.JobResultBody | null): this;
    getIsLastJob(): boolean | null;
    setIsLastJob(isLastJob: boolean | null): this;
    withIsLastJob(isLastJob: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RunByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
