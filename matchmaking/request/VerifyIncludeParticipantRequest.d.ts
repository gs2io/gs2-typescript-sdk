import IRequest from '../../core/interface/IRequest';
export default class VerifyIncludeParticipantRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private seasonName;
    private season;
    private tier;
    private seasonGatheringName;
    private accessToken;
    private verifyType;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getVerifyType(): string | null;
    setVerifyType(verifyType: string | null): this;
    withVerifyType(verifyType: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyIncludeParticipantRequest;
    toDict(): {
        [key: string]: any;
    };
}
