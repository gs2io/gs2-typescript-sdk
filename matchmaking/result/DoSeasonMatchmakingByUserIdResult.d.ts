import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class DoSeasonMatchmakingByUserIdResult implements IResult {
    private item;
    private matchmakingContextToken;
    getItem(): Gs2Matchmaking.SeasonGathering | null;
    setItem(item: Gs2Matchmaking.SeasonGathering | null): this;
    withItem(item: Gs2Matchmaking.SeasonGathering | null): this;
    getMatchmakingContextToken(): string | null;
    setMatchmakingContextToken(matchmakingContextToken: string | null): this;
    withMatchmakingContextToken(matchmakingContextToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DoSeasonMatchmakingByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
