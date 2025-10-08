import IRequest from '../../core/interface/IRequest';
export default class GetClusterRankingByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private rankingName;
    private clusterName;
    private userId;
    private season;
    private timeOffsetToken;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getRankingName(): string | null;
    setRankingName(rankingName: string | null): this;
    withRankingName(rankingName: string | null): this;
    getClusterName(): string | null;
    setClusterName(clusterName: string | null): this;
    withClusterName(clusterName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getSeason(): number | null;
    setSeason(season: number | null): this;
    withSeason(season: number | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetClusterRankingByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
