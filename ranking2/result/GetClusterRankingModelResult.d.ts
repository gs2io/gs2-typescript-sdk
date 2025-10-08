import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class GetClusterRankingModelResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.ClusterRankingModel | null;
    setItem(item: Gs2Ranking2.ClusterRankingModel | null): this;
    withItem(item: Gs2Ranking2.ClusterRankingModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetClusterRankingModelResult;
    toDict(): {
        [key: string]: any;
    };
}
