import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetStaminaNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.StaminaNamespace | null;
    setItem(item: Gs2Watch.StaminaNamespace | null): this;
    withItem(item: Gs2Watch.StaminaNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStaminaNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
