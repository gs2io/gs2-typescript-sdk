import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class VerifyStaminaOverflowValueByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Stamina.Stamina | null;
    setItem(item: Gs2Stamina.Stamina | null): this;
    withItem(item: Gs2Stamina.Stamina | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyStaminaOverflowValueByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
