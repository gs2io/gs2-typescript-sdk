import IResult from '../../core/interface/IResult';
import * as Gs2Ranking from '../model';
export default class DescribeRankingsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Ranking.Ranking[] | null;
    setItems(items: Gs2Ranking.Ranking[] | null): this;
    withItems(items: Gs2Ranking.Ranking[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRankingsResult;
    toDict(): {
        [key: string]: any;
    };
}
