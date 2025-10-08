import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class ConsumeStaminaByStampTaskResult implements IResult {
    private item;
    private staminaModel;
    private newContextStack;
    getItem(): Gs2Stamina.Stamina | null;
    setItem(item: Gs2Stamina.Stamina | null): this;
    withItem(item: Gs2Stamina.Stamina | null): this;
    getStaminaModel(): Gs2Stamina.StaminaModel | null;
    setStaminaModel(staminaModel: Gs2Stamina.StaminaModel | null): this;
    withStaminaModel(staminaModel: Gs2Stamina.StaminaModel | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ConsumeStaminaByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
