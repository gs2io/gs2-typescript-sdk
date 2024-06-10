import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class DescribeClusterRankingScoresByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Ranking2.ClusterRankingScore[] | null;
    setItems(items: Gs2Ranking2.ClusterRankingScore[] | null): this;
    withItems(items: Gs2Ranking2.ClusterRankingScore[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeClusterRankingScoresByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
