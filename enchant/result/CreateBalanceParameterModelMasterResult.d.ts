import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class CreateBalanceParameterModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Enchant.BalanceParameterModelMaster | null;
    setItem(item: Gs2Enchant.BalanceParameterModelMaster | null): this;
    withItem(item: Gs2Enchant.BalanceParameterModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateBalanceParameterModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
