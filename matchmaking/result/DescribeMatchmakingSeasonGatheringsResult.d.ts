import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class DescribeMatchmakingSeasonGatheringsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Matchmaking.SeasonGathering[] | null;
    setItems(items: Gs2Matchmaking.SeasonGathering[] | null): this;
    withItems(items: Gs2Matchmaking.SeasonGathering[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMatchmakingSeasonGatheringsResult;
    toDict(): {
        [key: string]: any;
    };
}
