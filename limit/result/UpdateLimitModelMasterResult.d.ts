import IResult from '../../core/interface/IResult';
import * as Gs2Limit from '../model';
export default class UpdateLimitModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Limit.LimitModelMaster | null;
    setItem(item: Gs2Limit.LimitModelMaster | null): this;
    withItem(item: Gs2Limit.LimitModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateLimitModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
