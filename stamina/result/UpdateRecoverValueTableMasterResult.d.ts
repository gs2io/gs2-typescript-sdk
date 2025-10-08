import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class UpdateRecoverValueTableMasterResult implements IResult {
    private item;
    getItem(): Gs2Stamina.RecoverValueTableMaster | null;
    setItem(item: Gs2Stamina.RecoverValueTableMaster | null): this;
    withItem(item: Gs2Stamina.RecoverValueTableMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateRecoverValueTableMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
