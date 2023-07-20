import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class ReDrawRarityParameterStatusByStampSheetResult implements IResult {
    private item;
    getItem(): Gs2Enchant.RarityParameterStatus | null;
    setItem(item: Gs2Enchant.RarityParameterStatus | null): this;
    withItem(item: Gs2Enchant.RarityParameterStatus | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ReDrawRarityParameterStatusByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
