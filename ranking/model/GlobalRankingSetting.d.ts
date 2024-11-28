import IModel from '../../core/interface/IModel';
import * as Gs2Ranking from '../../ranking/model';
export default class GlobalRankingSetting implements IModel {
    private uniqueByUserId;
    private calculateIntervalMinutes;
    private calculateFixedTiming;
    private additionalScopes;
    private ignoreUserIds;
    private generation;
    getUniqueByUserId(): boolean | null;
    setUniqueByUserId(uniqueByUserId: boolean | null): this;
    withUniqueByUserId(uniqueByUserId: boolean | null): this;
    getCalculateIntervalMinutes(): number | null;
    setCalculateIntervalMinutes(calculateIntervalMinutes: number | null): this;
    withCalculateIntervalMinutes(calculateIntervalMinutes: number | null): this;
    getCalculateFixedTiming(): Gs2Ranking.FixedTiming | null;
    setCalculateFixedTiming(calculateFixedTiming: Gs2Ranking.FixedTiming | null): this;
    withCalculateFixedTiming(calculateFixedTiming: Gs2Ranking.FixedTiming | null): this;
    getAdditionalScopes(): Gs2Ranking.Scope[] | null;
    setAdditionalScopes(additionalScopes: Gs2Ranking.Scope[] | null): this;
    withAdditionalScopes(additionalScopes: Gs2Ranking.Scope[] | null): this;
    getIgnoreUserIds(): string[] | null;
    setIgnoreUserIds(ignoreUserIds: string[] | null): this;
    withIgnoreUserIds(ignoreUserIds: string[] | null): this;
    getGeneration(): string | null;
    setGeneration(generation: string | null): this;
    withGeneration(generation: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GlobalRankingSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
