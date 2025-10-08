import IResult from '../../core/interface/IResult';
import * as Gs2Friend from '../model';
export default class DescribeReceiveRequestsResult implements IResult {
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
    }): DescribeReceiveRequestsResult;
    toDict(): {
        [key: string]: any;
    };
}
