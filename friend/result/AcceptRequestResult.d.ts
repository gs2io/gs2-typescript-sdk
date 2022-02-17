import IResult from '../../core/interface/IResult';
import * as Gs2Friend from '../model';
export default class AcceptRequestResult implements IResult {
    private item;
    getItem(): Gs2Friend.FriendRequest | null;
    setItem(item: Gs2Friend.FriendRequest | null): this;
    withItem(item: Gs2Friend.FriendRequest | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcceptRequestResult;
    toDict(): {
        [key: string]: any;
    };
}
