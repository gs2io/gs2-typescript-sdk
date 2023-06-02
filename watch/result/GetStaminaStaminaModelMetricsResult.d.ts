import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetStaminaStaminaModelMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.StaminaStaminaModel | null;
    setItem(item: Gs2Watch.StaminaStaminaModel | null): this;
    withItem(item: Gs2Watch.StaminaStaminaModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStaminaStaminaModelMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
