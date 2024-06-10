import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class DescribeGlobalRankingsByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Ranking2.GlobalRankingData[] | null;
    setItems(items: Gs2Ranking2.GlobalRankingData[] | null): this;
    withItems(items: Gs2Ranking2.GlobalRankingData[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeGlobalRankingsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
