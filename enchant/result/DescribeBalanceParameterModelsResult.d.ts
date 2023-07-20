import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class DescribeBalanceParameterModelsResult implements IResult {
    private items;
    getItems(): Gs2Enchant.BalanceParameterModel[] | null;
    setItems(items: Gs2Enchant.BalanceParameterModel[] | null): this;
    withItems(items: Gs2Enchant.BalanceParameterModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBalanceParameterModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
