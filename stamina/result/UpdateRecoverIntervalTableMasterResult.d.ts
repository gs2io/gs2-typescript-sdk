import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class UpdateRecoverIntervalTableMasterResult implements IResult {
    private item;
    getItem(): Gs2Stamina.RecoverIntervalTableMaster | null;
    setItem(item: Gs2Stamina.RecoverIntervalTableMaster | null): this;
    withItem(item: Gs2Stamina.RecoverIntervalTableMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateRecoverIntervalTableMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
