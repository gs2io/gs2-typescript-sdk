import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class DescribeRatingModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Matchmaking.RatingModelMaster[] | null;
    setItems(items: Gs2Matchmaking.RatingModelMaster[] | null): this;
    withItems(items: Gs2Matchmaking.RatingModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRatingModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
