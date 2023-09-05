import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class SetRecoverIntervalByStampSheetResult implements IResult {
    private item;
    private old;
    private staminaModel;
    getItem(): Gs2Stamina.Stamina | null;
    setItem(item: Gs2Stamina.Stamina | null): this;
    withItem(item: Gs2Stamina.Stamina | null): this;
    getOld(): Gs2Stamina.Stamina | null;
    setOld(old: Gs2Stamina.Stamina | null): this;
    withOld(old: Gs2Stamina.Stamina | null): this;
    getStaminaModel(): Gs2Stamina.StaminaModel | null;
    setStaminaModel(staminaModel: Gs2Stamina.StaminaModel | null): this;
    withStaminaModel(staminaModel: Gs2Stamina.StaminaModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetRecoverIntervalByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
