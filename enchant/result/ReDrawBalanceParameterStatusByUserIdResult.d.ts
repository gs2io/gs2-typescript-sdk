import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class ReDrawBalanceParameterStatusByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Enchant.BalanceParameterStatus | null;
    setItem(item: Gs2Enchant.BalanceParameterStatus | null): this;
    withItem(item: Gs2Enchant.BalanceParameterStatus | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ReDrawBalanceParameterStatusByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
