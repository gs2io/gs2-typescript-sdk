import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeStaminaStaminaModelMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.StaminaStaminaModel[] | null;
    setItems(items: Gs2Watch.StaminaStaminaModel[] | null): this;
    withItems(items: Gs2Watch.StaminaStaminaModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeStaminaStaminaModelMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
