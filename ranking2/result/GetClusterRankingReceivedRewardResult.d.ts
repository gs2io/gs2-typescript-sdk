import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class GetClusterRankingReceivedRewardResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.ClusterRankingReceivedReward | null;
    setItem(item: Gs2Ranking2.ClusterRankingReceivedReward | null): this;
    withItem(item: Gs2Ranking2.ClusterRankingReceivedReward | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetClusterRankingReceivedRewardResult;
    toDict(): {
        [key: string]: any;
    };
}
