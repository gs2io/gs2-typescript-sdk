import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class GetClusterRankingByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.ClusterRankingData | null;
    setItem(item: Gs2Ranking2.ClusterRankingData | null): this;
    withItem(item: Gs2Ranking2.ClusterRankingData | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetClusterRankingByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
