import IResult from '../../core/interface/IResult';
import * as Gs2Ranking from '../model';
export default class DescribeScoresByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Ranking.Score[] | null;
    setItems(items: Gs2Ranking.Score[] | null): this;
    withItems(items: Gs2Ranking.Score[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeScoresByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
