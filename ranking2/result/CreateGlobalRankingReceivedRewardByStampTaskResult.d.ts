import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class CreateGlobalRankingReceivedRewardByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Ranking2.GlobalRankingReceivedReward | null;
    setItem(item: Gs2Ranking2.GlobalRankingReceivedReward | null): this;
    withItem(item: Gs2Ranking2.GlobalRankingReceivedReward | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateGlobalRankingReceivedRewardByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
