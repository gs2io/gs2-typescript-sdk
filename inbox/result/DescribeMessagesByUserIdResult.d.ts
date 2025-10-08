import IResult from '../../core/interface/IResult';
import * as Gs2Inbox from '../model';
export default class DescribeMessagesByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Inbox.Message[] | null;
    setItems(items: Gs2Inbox.Message[] | null): this;
    withItems(items: Gs2Inbox.Message[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMessagesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
