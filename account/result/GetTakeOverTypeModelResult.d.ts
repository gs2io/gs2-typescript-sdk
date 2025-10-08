import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class GetTakeOverTypeModelResult implements IResult {
    private item;
    getItem(): Gs2Account.TakeOverTypeModel | null;
    setItem(item: Gs2Account.TakeOverTypeModel | null): this;
    withItem(item: Gs2Account.TakeOverTypeModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetTakeOverTypeModelResult;
    toDict(): {
        [key: string]: any;
    };
}
