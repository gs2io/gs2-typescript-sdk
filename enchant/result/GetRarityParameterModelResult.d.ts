import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class GetRarityParameterModelResult implements IResult {
    private item;
    getItem(): Gs2Enchant.RarityParameterModel | null;
    setItem(item: Gs2Enchant.RarityParameterModel | null): this;
    withItem(item: Gs2Enchant.RarityParameterModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetRarityParameterModelResult;
    toDict(): {
        [key: string]: any;
    };
}
