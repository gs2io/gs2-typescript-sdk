import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class DescribeStaminaModelsResult implements IResult {
    private items;
    getItems(): Gs2Stamina.StaminaModel[] | null;
    setItems(items: Gs2Stamina.StaminaModel[] | null): this;
    withItems(items: Gs2Stamina.StaminaModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeStaminaModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
