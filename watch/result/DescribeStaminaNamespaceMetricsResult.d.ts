import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeStaminaNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.StaminaNamespace[] | null;
    setItems(items: Gs2Watch.StaminaNamespace[] | null): this;
    withItems(items: Gs2Watch.StaminaNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeStaminaNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
