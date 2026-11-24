import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class VerifyBalanceParameterStatusByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Enchant.BalanceParameterStatus | null;
    setItem(item: Gs2Enchant.BalanceParameterStatus | null): this;
    withItem(item: Gs2Enchant.BalanceParameterStatus | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyBalanceParameterStatusByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
