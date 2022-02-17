import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class GetStaminaModelResult implements IResult {
    private item;
    getItem(): Gs2Stamina.StaminaModel | null;
    setItem(item: Gs2Stamina.StaminaModel | null): this;
    withItem(item: Gs2Stamina.StaminaModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStaminaModelResult;
    toDict(): {
        [key: string]: any;
    };
}
