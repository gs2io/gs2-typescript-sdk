import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class UpdateMaxStaminaTableMasterResult implements IResult {
    private item;
    getItem(): Gs2Stamina.MaxStaminaTableMaster | null;
    setItem(item: Gs2Stamina.MaxStaminaTableMaster | null): this;
    withItem(item: Gs2Stamina.MaxStaminaTableMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateMaxStaminaTableMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
