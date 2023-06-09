import IResult from '../../core/interface/IResult';
import * as Gs2Idle from '../model';
export default class DescribeStatusesByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Idle.Status[] | null;
    setItems(items: Gs2Idle.Status[] | null): this;
    withItems(items: Gs2Idle.Status[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeStatusesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
