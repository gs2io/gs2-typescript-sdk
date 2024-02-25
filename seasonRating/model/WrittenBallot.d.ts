import IModel from '../../core/interface/IModel';
import Ballot from './Ballot';
import GameResult from './GameResult';
export default class WrittenBallot implements IModel {
    private ballot;
    private gameResults;
    getBallot(): Ballot | null;
    setBallot(ballot: Ballot | null): this;
    withBallot(ballot: Ballot | null): this;
    getGameResults(): GameResult[] | null;
    setGameResults(gameResults: GameResult[] | null): this;
    withGameResults(gameResults: GameResult[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WrittenBallot | null;
    toDict(): {
        [key: string]: any;
    };
}
