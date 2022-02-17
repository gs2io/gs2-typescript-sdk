import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class GetTakeOverResult implements IResult {
    private item;
    getItem(): Gs2Account.TakeOver | null;
    setItem(item: Gs2Account.TakeOver | null): this;
    withItem(item: Gs2Account.TakeOver | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetTakeOverResult;
    toDict(): {
        [key: string]: any;
    };
}
