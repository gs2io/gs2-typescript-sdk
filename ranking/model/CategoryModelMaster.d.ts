import IModel from '../../core/interface/IModel';
import Scope from './Scope';
import GlobalRankingSetting from './GlobalRankingSetting';
export default class CategoryModelMaster implements IModel {
    private categoryModelId;
    private name;
    private description;
    private metadata;
    private minimumValue;
    private maximumValue;
    private sum;
    private orderDirection;
    private scope;
    private globalRankingSetting;
    private entryPeriodEventId;
    private accessPeriodEventId;
    private uniqueByUserId;
    private calculateFixedTimingHour;
    private calculateFixedTimingMinute;
    private calculateIntervalMinutes;
    private additionalScopes;
    private ignoreUserIds;
    private generation;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getCategoryName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, categoryName: string | null): string | null;
    getCategoryModelId(): string | null;
    setCategoryModelId(categoryModelId: string | null): this;
    withCategoryModelId(categoryModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
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
    getSum(): boolean | null;
    setSum(sum: boolean | null): this;
    withSum(sum: boolean | null): this;
    getOrderDirection(): string | null;
    setOrderDirection(orderDirection: string | null): this;
    withOrderDirection(orderDirection: string | null): this;
    getScope(): string | null;
    setScope(scope: string | null): this;
    withScope(scope: string | null): this;
    getGlobalRankingSetting(): GlobalRankingSetting | null;
    setGlobalRankingSetting(globalRankingSetting: GlobalRankingSetting | null): this;
    withGlobalRankingSetting(globalRankingSetting: GlobalRankingSetting | null): this;
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
    getAdditionalScopes(): Scope[] | null;
    /** @deprecated */
    setAdditionalScopes(additionalScopes: Scope[] | null): this;
    /** @deprecated */
    withAdditionalScopes(additionalScopes: Scope[] | null): this;
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
    }): CategoryModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
