import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class GetBalanceParameterModelResult implements IResult {
    private item;
    getItem(): Gs2Enchant.BalanceParameterModel | null;
    setItem(item: Gs2Enchant.BalanceParameterModel | null): this;
    withItem(item: Gs2Enchant.BalanceParameterModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBalanceParameterModelResult;
    toDict(): {
        [key: string]: any;
    };
}
