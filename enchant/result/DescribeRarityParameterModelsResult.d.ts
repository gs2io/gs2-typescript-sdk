import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class DescribeRarityParameterModelsResult implements IResult {
    private items;
    getItems(): Gs2Enchant.RarityParameterModel[] | null;
    setItems(items: Gs2Enchant.RarityParameterModel[] | null): this;
    withItems(items: Gs2Enchant.RarityParameterModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRarityParameterModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
