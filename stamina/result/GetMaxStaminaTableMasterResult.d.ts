import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class GetMaxStaminaTableMasterResult implements IResult {
    private item;
    getItem(): Gs2Stamina.MaxStaminaTableMaster | null;
    setItem(item: Gs2Stamina.MaxStaminaTableMaster | null): this;
    withItem(item: Gs2Stamina.MaxStaminaTableMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMaxStaminaTableMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
