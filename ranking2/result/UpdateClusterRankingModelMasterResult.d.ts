import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class UpdateClusterRankingModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.ClusterRankingModelMaster | null;
    setItem(item: Gs2Ranking2.ClusterRankingModelMaster | null): this;
    withItem(item: Gs2Ranking2.ClusterRankingModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateClusterRankingModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
