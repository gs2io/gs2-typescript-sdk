import IModel from '../../core/interface/IModel';
export default class Ballot implements IModel {
    private userId;
    private seasonName;
    private sessionName;
    private numberOfPlayer;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getSeasonName(): string | null;
    setSeasonName(seasonName: string | null): this;
    withSeasonName(seasonName: string | null): this;
    getSessionName(): string | null;
    setSessionName(sessionName: string | null): this;
    withSessionName(sessionName: string | null): this;
    getNumberOfPlayer(): number | null;
    setNumberOfPlayer(numberOfPlayer: number | null): this;
    withNumberOfPlayer(numberOfPlayer: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Ballot | null;
    toDict(): {
        [key: string]: any;
    };
}
