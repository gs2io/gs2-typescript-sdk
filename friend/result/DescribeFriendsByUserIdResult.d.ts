import IResult from '../../core/interface/IResult';
import * as Gs2Friend from '../model';
export default class DescribeFriendsByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Friend.FriendUser[] | null;
    setItems(items: Gs2Friend.FriendUser[] | null): this;
    withItems(items: Gs2Friend.FriendUser[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeFriendsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
