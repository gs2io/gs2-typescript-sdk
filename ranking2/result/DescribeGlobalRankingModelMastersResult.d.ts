import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class DescribeGlobalRankingModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Ranking2.GlobalRankingModelMaster[] | null;
    setItems(items: Gs2Ranking2.GlobalRankingModelMaster[] | null): this;
    withItems(items: Gs2Ranking2.GlobalRankingModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeGlobalRankingModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
