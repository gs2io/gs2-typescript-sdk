import IModel from '../../core/interface/IModel';
export default class GlobalRankingScore implements IModel {
    private globalRankingScoreId;
    private rankingName;
    private userId;
    private season;
    private score;
    private metadata;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getRankingName(grn: string): string | null;
    static getSeason(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, rankingName: string | null, season: string | null): string | null;
    getGlobalRankingScoreId(): string | null;
    setGlobalRankingScoreId(globalRankingScoreId: string | null): this;
    withGlobalRankingScoreId(globalRankingScoreId: string | null): this;
    getRankingName(): string | null;
    setRankingName(rankingName: string | null): this;
    withRankingName(rankingName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getSeason(): number | null;
    setSeason(season: number | null): this;
    withSeason(season: number | null): this;
    getScore(): number | null;
    setScore(score: number | null): this;
    withScore(score: number | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GlobalRankingScore | null;
    toDict(): {
        [key: string]: any;
    };
}