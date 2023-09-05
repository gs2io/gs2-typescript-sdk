import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class ReDrawRarityParameterStatusByUserIdResult implements IResult {
    private item;
    private old;
    getItem(): Gs2Enchant.RarityParameterStatus | null;
    setItem(item: Gs2Enchant.RarityParameterStatus | null): this;
    withItem(item: Gs2Enchant.RarityParameterStatus | null): this;
    getOld(): Gs2Enchant.RarityParameterStatus | null;
    setOld(old: Gs2Enchant.RarityParameterStatus | null): this;
    withOld(old: Gs2Enchant.RarityParameterStatus | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ReDrawRarityParameterStatusByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
