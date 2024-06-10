import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class DeleteClusterRankingScoreByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.ClusterRankingScore | null;
    setItem(item: Gs2Ranking2.ClusterRankingScore | null): this;
    withItem(item: Gs2Ranking2.ClusterRankingScore | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteClusterRankingScoreByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
