import IResult from '../../core/interface/IResult';
import * as Gs2Friend from '../model';
export default class DescribeSendRequestsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Friend.FriendRequest[] | null;
    setItems(items: Gs2Friend.FriendRequest[] | null): this;
    withItems(items: Gs2Friend.FriendRequest[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSendRequestsResult;
    toDict(): {
        [key: string]: any;
    };
}
