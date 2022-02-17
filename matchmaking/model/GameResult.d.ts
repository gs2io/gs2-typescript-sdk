import IModel from '../../core/interface/IModel';
export default class GameResult implements IModel {
    private rank;
    private userId;
    getRank(): number | null;
    setRank(rank: number | null): this;
    withRank(rank: number | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GameResult | null;
    toDict(): {
        [key: string]: any;
    };
}
