import IResult from '../../core/interface/IResult';
import * as Gs2Limit from '../model';
export default class ExportMasterResult implements IResult {
    private item;
    getItem(): Gs2Limit.CurrentLimitMaster | null;
    setItem(item: Gs2Limit.CurrentLimitMaster | null): this;
    withItem(item: Gs2Limit.CurrentLimitMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExportMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
