import IResult from '../../core/interface/IResult';
import * as Gs2JobQueue from '../model';
export default class DescribeJobsByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2JobQueue.Job[] | null;
    setItems(items: Gs2JobQueue.Job[] | null): this;
    withItems(items: Gs2JobQueue.Job[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeJobsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
