import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class DescribeProgressesByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Quest.Progress[] | null;
    setItems(items: Gs2Quest.Progress[] | null): this;
    withItems(items: Gs2Quest.Progress[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeProgressesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
