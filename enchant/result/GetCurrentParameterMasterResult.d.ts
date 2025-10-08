import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class GetCurrentParameterMasterResult implements IResult {
    private item;
    getItem(): Gs2Enchant.CurrentParameterMaster | null;
    setItem(item: Gs2Enchant.CurrentParameterMaster | null): this;
    withItem(item: Gs2Enchant.CurrentParameterMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCurrentParameterMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
