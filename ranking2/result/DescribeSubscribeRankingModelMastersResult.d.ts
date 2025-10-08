import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class DescribeSubscribeRankingModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Ranking2.SubscribeRankingModelMaster[] | null;
    setItems(items: Gs2Ranking2.SubscribeRankingModelMaster[] | null): this;
    withItems(items: Gs2Ranking2.SubscribeRankingModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSubscribeRankingModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
