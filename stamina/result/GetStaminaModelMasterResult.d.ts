import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class GetStaminaModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Stamina.StaminaModelMaster | null;
    setItem(item: Gs2Stamina.StaminaModelMaster | null): this;
    withItem(item: Gs2Stamina.StaminaModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStaminaModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
