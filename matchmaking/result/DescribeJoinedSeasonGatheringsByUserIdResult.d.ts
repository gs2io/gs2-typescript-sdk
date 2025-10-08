import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class DescribeJoinedSeasonGatheringsByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Matchmaking.JoinedSeasonGathering[] | null;
    setItems(items: Gs2Matchmaking.JoinedSeasonGathering[] | null): this;
    withItems(items: Gs2Matchmaking.JoinedSeasonGathering[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeJoinedSeasonGatheringsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
