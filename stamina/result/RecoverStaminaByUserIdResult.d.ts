import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class RecoverStaminaByUserIdResult implements IResult {
    private item;
    private staminaModel;
    private overflowValue;
    getItem(): Gs2Stamina.Stamina | null;
    setItem(item: Gs2Stamina.Stamina | null): this;
    withItem(item: Gs2Stamina.Stamina | null): this;
    getStaminaModel(): Gs2Stamina.StaminaModel | null;
    setStaminaModel(staminaModel: Gs2Stamina.StaminaModel | null): this;
    withStaminaModel(staminaModel: Gs2Stamina.StaminaModel | null): this;
    getOverflowValue(): number | null;
    setOverflowValue(overflowValue: number | null): this;
    withOverflowValue(overflowValue: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RecoverStaminaByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
