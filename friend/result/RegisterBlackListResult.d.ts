import IResult from '../../core/interface/IResult';
import * as Gs2Friend from '../model';
export default class RegisterBlackListResult implements IResult {
    private item;
    getItem(): Gs2Friend.BlackList | null;
    setItem(item: Gs2Friend.BlackList | null): this;
    withItem(item: Gs2Friend.BlackList | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RegisterBlackListResult;
    toDict(): {
        [key: string]: any;
    };
}
