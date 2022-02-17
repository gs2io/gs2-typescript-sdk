import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class CreateTakeOverResult implements IResult {
    private item;
    getItem(): Gs2Account.TakeOver | null;
    setItem(item: Gs2Account.TakeOver | null): this;
    withItem(item: Gs2Account.TakeOver | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateTakeOverResult;
    toDict(): {
        [key: string]: any;
    };
}
