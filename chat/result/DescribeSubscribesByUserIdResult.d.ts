import IResult from '../../core/interface/IResult';
import * as Gs2Chat from '../model';
export default class DescribeSubscribesByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Chat.Subscribe[] | null;
    setItems(items: Gs2Chat.Subscribe[] | null): this;
    withItems(items: Gs2Chat.Subscribe[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSubscribesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
