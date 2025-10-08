import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class VerifyRarityParameterStatusByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Enchant.RarityParameterStatus | null;
    setItem(item: Gs2Enchant.RarityParameterStatus | null): this;
    withItem(item: Gs2Enchant.RarityParameterStatus | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyRarityParameterStatusByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
