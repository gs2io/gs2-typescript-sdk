import IResult from '../../core/interface/IResult';
import * as Gs2Friend from '../model';
export default class DescribeFollowsByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Friend.FollowUser[] | null;
    setItems(items: Gs2Friend.FollowUser[] | null): this;
    withItems(items: Gs2Friend.FollowUser[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeFollowsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
