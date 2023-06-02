import IModel from '../../core/interface/IModel';
export default class MatchmakingNamespaceStatistics implements IModel {
    private createGathering;
    private matchmaking;
    private completeRate;
    getCreateGathering(): number | null;
    setCreateGathering(createGathering: number | null): this;
    withCreateGathering(createGathering: number | null): this;
    getMatchmaking(): number | null;
    setMatchmaking(matchmaking: number | null): this;
    withMatchmaking(matchmaking: number | null): this;
    getCompleteRate(): number | null;
    setCompleteRate(completeRate: number | null): this;
    withCompleteRate(completeRate: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MatchmakingNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
