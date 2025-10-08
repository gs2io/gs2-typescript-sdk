import IResult from '../../core/interface/IResult';
import * as Gs2Limit from '../model';
export default class CreateLimitModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Limit.LimitModelMaster | null;
    setItem(item: Gs2Limit.LimitModelMaster | null): this;
    withItem(item: Gs2Limit.LimitModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateLimitModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
