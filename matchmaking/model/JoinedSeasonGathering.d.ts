import IModel from '../../core/interface/IModel';
export default class JoinedSeasonGathering implements IModel {
    private joinedSeasonGatheringId;
    private userId;
    private seasonName;
    private season;
    private tier;
    private seasonGatheringName;
    private createdAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getSeasonName(grn: string): string | null;
    static getSeason(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, seasonName: string | null, season: string | null, userId: string | null): string | null;
    getJoinedSeasonGatheringId(): string | null;
    setJoinedSeasonGatheringId(joinedSeasonGatheringId: string | null): this;
    withJoinedSeasonGatheringId(joinedSeasonGatheringId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getSeasonName(): string | null;
    setSeasonName(seasonName: string | null): this;
    withSeasonName(seasonName: string | null): this;
    getSeason(): number | null;
    setSeason(season: number | null): this;
    withSeason(season: number | null): this;
    getTier(): number | null;
    setTier(tier: number | null): this;
    withTier(tier: number | null): this;
    getSeasonGatheringName(): string | null;
    setSeasonGatheringName(seasonGatheringName: string | null): this;
    withSeasonGatheringName(seasonGatheringName: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): JoinedSeasonGathering | null;
    toDict(): {
        [key: string]: any;
    };
}
