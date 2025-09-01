import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class VerifyStaminaRecoverValueByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Stamina.Stamina | null;
    setItem(item: Gs2Stamina.Stamina | null): this;
    withItem(item: Gs2Stamina.Stamina | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyStaminaRecoverValueByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
