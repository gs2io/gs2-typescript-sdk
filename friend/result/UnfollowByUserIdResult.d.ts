import IResult from '../../core/interface/IResult';
import * as Gs2Friend from '../model';
export default class UnfollowByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Friend.FollowUser | null;
    setItem(item: Gs2Friend.FollowUser | null): this;
    withItem(item: Gs2Friend.FollowUser | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnfollowByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
