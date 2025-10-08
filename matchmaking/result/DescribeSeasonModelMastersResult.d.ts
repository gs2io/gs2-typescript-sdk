import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class DescribeSeasonModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Matchmaking.SeasonModelMaster[] | null;
    setItems(items: Gs2Matchmaking.SeasonModelMaster[] | null): this;
    withItems(items: Gs2Matchmaking.SeasonModelMaster[] | null): this;
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
