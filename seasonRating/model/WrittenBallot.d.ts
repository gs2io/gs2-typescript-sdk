import IModel from '../../core/interface/IModel';
import * as Gs2SeasonRating from '../../seasonRating/model';
export default class WrittenBallot implements IModel {
    private ballot;
    private gameResults;
    getBallot(): Gs2SeasonRating.Ballot | null;
    setBallot(ballot: Gs2SeasonRating.Ballot | null): this;
    withBallot(ballot: Gs2SeasonRating.Ballot | null): this;
    getGameResults(): Gs2SeasonRating.GameResult[] | null;
    setGameResults(gameResults: Gs2SeasonRating.GameResult[] | null): this;
    withGameResults(gameResults: Gs2SeasonRating.GameResult[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WrittenBallot | null;
    toDict(): {
        [key: string]: any;
    };
}
