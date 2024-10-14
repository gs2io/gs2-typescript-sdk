import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class VerifySubscribeRankingScoreByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Ranking2.SubscribeRankingScore | null;
    setItem(item: Gs2Ranking2.SubscribeRankingScore | null): this;
    withItem(item: Gs2Ranking2.SubscribeRankingScore | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifySubscribeRankingScoreByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
