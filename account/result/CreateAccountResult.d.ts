import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class CreateAccountResult implements IResult {
    private item;
    getItem(): Gs2Account.Account | null;
    setItem(item: Gs2Account.Account | null): this;
    withItem(item: Gs2Account.Account | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateAccountResult;
    toDict(): {
        [key: string]: any;
    };
}
