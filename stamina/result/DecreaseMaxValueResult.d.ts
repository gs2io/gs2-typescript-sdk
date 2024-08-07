import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class DecreaseMaxValueResult implements IResult {
    private item;
    private staminaModel;
    getItem(): Gs2Stamina.Stamina | null;
    setItem(item: Gs2Stamina.Stamina | null): this;
    withItem(item: Gs2Stamina.Stamina | null): this;
    getStaminaModel(): Gs2Stamina.StaminaModel | null;
    setStaminaModel(staminaModel: Gs2Stamina.StaminaModel | null): this;
    withStaminaModel(staminaModel: Gs2Stamina.StaminaModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DecreaseMaxValueResult;
    toDict(): {
        [key: string]: any;
    };
}
