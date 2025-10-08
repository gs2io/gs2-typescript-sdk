import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class VerifyRarityParameterStatusByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Enchant.RarityParameterStatus | null;
    setItem(item: Gs2Enchant.RarityParameterStatus | null): this;
    withItem(item: Gs2Enchant.RarityParameterStatus | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyRarityParameterStatusByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
