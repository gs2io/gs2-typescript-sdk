import IModel from '../../core/interface/IModel';
export default class SubscribeUser implements IModel {
    private rankingName;
    private userId;
    private targetUserId;
    getRankingName(): string | null;
    setRankingName(rankingName: string | null): this;
    withRankingName(rankingName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getTargetUserId(): string | null;
    setTargetUserId(targetUserId: string | null): this;
    withTargetUserId(targetUserId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SubscribeUser | null;
    toDict(): {
        [key: string]: any;
    };
}
