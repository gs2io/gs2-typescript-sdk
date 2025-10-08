import IModel from '../../core/interface/IModel';
import * as Gs2Matchmaking from '../../matchmaking/model';
export default class WrittenBallot implements IModel {
    private ballot;
    private gameResults;
    getBallot(): Gs2Matchmaking.Ballot | null;
    setBallot(ballot: Gs2Matchmaking.Ballot | null): this;
    withBallot(ballot: Gs2Matchmaking.Ballot | null): this;
    getGameResults(): Gs2Matchmaking.GameResult[] | null;
    setGameResults(gameResults: Gs2Matchmaking.GameResult[] | null): this;
    withGameResults(gameResults: Gs2Matchmaking.GameResult[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WrittenBallot | null;
    toDict(): {
        [key: string]: any;
    };
}
