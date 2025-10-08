import IRequest from '../../core/interface/IRequest';
export default class GetJoinedSeasonGatheringRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private seasonName;
    private season;
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
    getSeasonName(): string | null;
    setSeasonName(seasonName: string | null): this;
    withSeasonName(seasonName: string | null): this;
    getSeason(): number | null;
    setSeason(season: number | null): this;
    withSeason(season: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetJoinedSeasonGatheringRequest;
    toDict(): {
        [key: string]: any;
    };
}
