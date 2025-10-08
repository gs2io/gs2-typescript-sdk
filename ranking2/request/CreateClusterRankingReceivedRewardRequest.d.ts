import IRequest from '../../core/interface/IRequest';
export default class CreateClusterRankingReceivedRewardRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private rankingName;
    private clusterName;
    private accessToken;
    private season;
    private duplicationAvoider;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getSeason(): number | null;
    setSeason(season: number | null): this;
    withSeason(season: number | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateClusterRankingReceivedRewardRequest;
    toDict(): {
        [key: string]: any;
    };
}
