import IResult from '../../core/interface/IResult';
import * as Gs2Inbox from '../model';
export default class DescribeMessagesResult implements IResult {
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
    }): DescribeMessagesResult;
    toDict(): {
        [key: string]: any;
    };
}
