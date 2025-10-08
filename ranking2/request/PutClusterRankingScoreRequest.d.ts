import IRequest from '../../core/interface/IRequest';
export default class PutClusterRankingScoreRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private rankingName;
    private clusterName;
    private accessToken;
    private score;
    private metadata;
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
    getScore(): number | null;
    setScore(score: number | null): this;
    withScore(score: number | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PutClusterRankingScoreRequest;
    toDict(): {
        [key: string]: any;
    };
}
