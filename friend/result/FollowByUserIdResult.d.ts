import IResult from '../../core/interface/IResult';
import * as Gs2Friend from '../model';
export default class FollowByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Friend.FollowUser | null;
    setItem(item: Gs2Friend.FollowUser | null): this;
    withItem(item: Gs2Friend.FollowUser | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FollowByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
