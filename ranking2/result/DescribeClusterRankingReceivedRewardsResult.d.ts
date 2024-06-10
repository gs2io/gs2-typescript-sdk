import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class DescribeClusterRankingReceivedRewardsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Ranking2.ClusterRankingReceivedReward[] | null;
    setItems(items: Gs2Ranking2.ClusterRankingReceivedReward[] | null): this;
    withItems(items: Gs2Ranking2.ClusterRankingReceivedReward[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeClusterRankingReceivedRewardsResult;
    toDict(): {
        [key: string]: any;
    };
}
