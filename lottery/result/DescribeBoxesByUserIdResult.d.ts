import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class DescribeBoxesByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Lottery.Box[] | null;
    setItems(items: Gs2Lottery.Box[] | null): this;
    withItems(items: Gs2Lottery.Box[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBoxesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}