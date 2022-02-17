import IResult from '../../core/interface/IResult';
import * as Gs2JobQueue from '../model';
export default class DescribeDeadLetterJobsByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2JobQueue.DeadLetterJob[] | null;
    setItems(items: Gs2JobQueue.DeadLetterJob[] | null): this;
    withItems(items: Gs2JobQueue.DeadLetterJob[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeDeadLetterJobsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
