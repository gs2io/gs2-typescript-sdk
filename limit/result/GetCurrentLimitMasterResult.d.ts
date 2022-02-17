import IResult from '../../core/interface/IResult';
import * as Gs2Limit from '../model';
export default class GetCurrentLimitMasterResult implements IResult {
    private item;
    getItem(): Gs2Limit.CurrentLimitMaster | null;
    setItem(item: Gs2Limit.CurrentLimitMaster | null): this;
    withItem(item: Gs2Limit.CurrentLimitMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCurrentLimitMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
