import IRequest from '../../core/interface/IRequest';
import * as Gs2Ranking from '../model';
export default class UpdateCategoryModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private categoryName;
    private description;
    private metadata;
    private minimumValue;
    private maximumValue;
    private orderDirection;
    private scope;
    private globalRankingSetting;
    private entryPeriodEventId;
    private accessPeriodEventId;
    private uniqueByUserId;
    private sum;
    private calculateFixedTimingHour;
    private calculateFixedTimingMinute;
    private calculateIntervalMinutes;
    private additionalScopes;
    private ignoreUserIds;
    private generation;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getCategoryName(): string | null;
    setCategoryName(categoryName: string | null): this;
    withCategoryName(categoryName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getMinimumValue(): number | null;
    setMinimumValue(minimumValue: number | null): this;
    withMinimumValue(minimumValue: number | null): this;
    getMaximumValue(): number | null;
    setMaximumValue(maximumValue: number | null): this;
    withMaximumValue(maximumValue: number | null): this;
    getOrderDirection(): string | null;
    setOrderDirection(orderDirection: string | null): this;
    withOrderDirection(orderDirection: string | null): this;
    getScope(): string | null;
    setScope(scope: string | null): this;
    withScope(scope: string | null): this;
    getGlobalRankingSetting(): Gs2Ranking.GlobalRankingSetting | null;
    setGlobalRankingSetting(globalRankingSetting: Gs2Ranking.GlobalRankingSetting | null): this;
    withGlobalRankingSetting(globalRankingSetting: Gs2Ranking.GlobalRankingSetting | null): this;
    getEntryPeriodEventId(): string | null;
    setEntryPeriodEventId(entryPeriodEventId: string | null): this;
    withEntryPeriodEventId(entryPeriodEventId: string | null): this;
    getAccessPeriodEventId(): string | null;
    setAccessPeriodEventId(accessPeriodEventId: string | null): this;
    withAccessPeriodEventId(accessPeriodEventId: string | null): this;
    /** @deprecated */
    getUniqueByUserId(): boolean | null;
    /** @deprecated */
    setUniqueByUserId(uniqueByUserId: boolean | null): this;
    /** @deprecated */
    withUniqueByUserId(uniqueByUserId: boolean | null): this;
    getSum(): boolean | null;
    setSum(sum: boolean | null): this;
    withSum(sum: boolean | null): this;
    /** @deprecated */
    getCalculateFixedTimingHour(): number | null;
    /** @deprecated */
    setCalculateFixedTimingHour(calculateFixedTimingHour: number | null): this;
    /** @deprecated */
    withCalculateFixedTimingHour(calculateFixedTimingHour: number | null): this;
    /** @deprecated */
    getCalculateFixedTimingMinute(): number | null;
    /** @deprecated */
    setCalculateFixedTimingMinute(calculateFixedTimingMinute: number | null): this;
    /** @deprecated */
    withCalculateFixedTimingMinute(calculateFixedTimingMinute: number | null): this;
    /** @deprecated */
    getCalculateIntervalMinutes(): number | null;
    /** @deprecated */
    setCalculateIntervalMinutes(calculateIntervalMinutes: number | null): this;
    /** @deprecated */
    withCalculateIntervalMinutes(calculateIntervalMinutes: number | null): this;
    /** @deprecated */
    getAdditionalScopes(): Gs2Ranking.Scope[] | null;
    /** @deprecated */
    setAdditionalScopes(additionalScopes: Gs2Ranking.Scope[] | null): this;
    /** @deprecated */
    withAdditionalScopes(additionalScopes: Gs2Ranking.Scope[] | null): this;
    /** @deprecated */
    getIgnoreUserIds(): string[] | null;
    /** @deprecated */
    setIgnoreUserIds(ignoreUserIds: string[] | null): this;
    /** @deprecated */
    withIgnoreUserIds(ignoreUserIds: string[] | null): this;
    /** @deprecated */
    getGeneration(): string | null;
    /** @deprecated */
    setGeneration(generation: string | null): this;
    /** @deprecated */
    withGeneration(generation: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCategoryModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
