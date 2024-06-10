import IModel from '../../core/interface/IModel';
export default class ClusterRankingReceivedReward implements IModel {
    private clusterRankingReceivedRewardId;
    private rankingName;
    private clusterName;
    private season;
    private userId;
    private receivedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getRankingName(grn: string): string | null;
    static getClusterName(grn: string): string | null;
    static getSeason(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, rankingName: string | null, clusterName: string | null, season: string | null): string | null;
    getClusterRankingReceivedRewardId(): string | null;
    setClusterRankingReceivedRewardId(clusterRankingReceivedRewardId: string | null): this;
    withClusterRankingReceivedRewardId(clusterRankingReceivedRewardId: string | null): this;
    getRankingName(): string | null;
    setRankingName(rankingName: string | null): this;
    withRankingName(rankingName: string | null): this;
    getClusterName(): string | null;
    setClusterName(clusterName: string | null): this;
    withClusterName(clusterName: string | null): this;
    getSeason(): number | null;
    setSeason(season: number | null): this;
    withSeason(season: number | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getReceivedAt(): number | null;
    setReceivedAt(receivedAt: number | null): this;
    withReceivedAt(receivedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ClusterRankingReceivedReward | null;
    toDict(): {
        [key: string]: any;
    };
}
