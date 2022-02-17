import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class DoMatchmakingByPlayerResult implements IResult {
    private item;
    private matchmakingContextToken;
    getItem(): Gs2Matchmaking.Gathering | null;
    setItem(item: Gs2Matchmaking.Gathering | null): this;
    withItem(item: Gs2Matchmaking.Gathering | null): this;
    getMatchmakingContextToken(): string | null;
    setMatchmakingContextToken(matchmakingContextToken: string | null): this;
    withMatchmakingContextToken(matchmakingContextToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DoMatchmakingByPlayerResult;
    toDict(): {
        [key: string]: any;
    };
}
