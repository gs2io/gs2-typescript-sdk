import IResult from '../../core/interface/IResult';
import * as Gs2SeasonRating from '../model';
export default class DescribeSeasonModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2SeasonRating.SeasonModelMaster[] | null;
    setItems(items: Gs2SeasonRating.SeasonModelMaster[] | null): this;
    withItems(items: Gs2SeasonRating.SeasonModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSeasonModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
