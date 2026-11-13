import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class IssueTakeOverCodeByUserIdResult implements IResult {
    private item;
    private password;
    getItem(): Gs2Account.TakeOver | null;
    setItem(item: Gs2Account.TakeOver | null): this;
    withItem(item: Gs2Account.TakeOver | null): this;
    getPassword(): string | null;
    setPassword(password: string | null): this;
    withPassword(password: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IssueTakeOverCodeByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
