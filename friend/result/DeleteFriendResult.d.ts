import IResult from '../../core/interface/IResult';
import * as Gs2Friend from '../model';
export default class DeleteFriendResult implements IResult {
    private item;
    getItem(): Gs2Friend.FriendUser | null;
    setItem(item: Gs2Friend.FriendUser | null): this;
    withItem(item: Gs2Friend.FriendUser | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteFriendResult;
    toDict(): {
        [key: string]: any;
    };
}
