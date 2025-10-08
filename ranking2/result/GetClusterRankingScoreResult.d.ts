import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class GetClusterRankingScoreResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.ClusterRankingScore | null;
    setItem(item: Gs2Ranking2.ClusterRankingScore | null): this;
    withItem(item: Gs2Ranking2.ClusterRankingScore | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetClusterRankingScoreResult;
    toDict(): {
        [key: string]: any;
    };
}
