import IRequest from '../../core/interface/IRequest';
import * as Gs2Ranking2 from '../model';
export default class ReceiveClusterRankingReceivedRewardRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private rankingName;
    private clusterName;
    private season;
    private config;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getRankingName(): string | null;
    setRankingName(rankingName: string | null): this;
    withRankingName(rankingName: string | null): this;
    getClusterName(): string | null;
    setClusterName(clusterName: string | null): this;
    withClusterName(clusterName: string | null): this;
    getSeason(): number | null;
    setSeason(season: number | null): this;
    withSeason(season: number | null): this;
    getConfig(): Gs2Ranking2.Config[] | null;
    setConfig(config: Gs2Ranking2.Config[] | null): this;
    withConfig(config: Gs2Ranking2.Config[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ReceiveClusterRankingReceivedRewardRequest;
    toDict(): {
        [key: string]: any;
    };
}
