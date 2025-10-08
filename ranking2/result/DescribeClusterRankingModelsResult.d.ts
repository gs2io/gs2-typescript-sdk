import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class DescribeClusterRankingModelsResult implements IResult {
    private items;
    getItems(): Gs2Ranking2.ClusterRankingModel[] | null;
    setItems(items: Gs2Ranking2.ClusterRankingModel[] | null): this;
    withItems(items: Gs2Ranking2.ClusterRankingModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeClusterRankingModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
