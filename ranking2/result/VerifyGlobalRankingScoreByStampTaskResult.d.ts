import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class VerifyGlobalRankingScoreByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Ranking2.GlobalRankingScore | null;
    setItem(item: Gs2Ranking2.GlobalRankingScore | null): this;
    withItem(item: Gs2Ranking2.GlobalRankingScore | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyGlobalRankingScoreByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
