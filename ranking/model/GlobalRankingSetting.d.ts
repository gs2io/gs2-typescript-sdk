import IModel from '../../core/interface/IModel';
import FixedTiming from './FixedTiming';
import Scope from './Scope';
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
    getCalculateFixedTiming(): FixedTiming | null;
    setCalculateFixedTiming(calculateFixedTiming: FixedTiming | null): this;
    withCalculateFixedTiming(calculateFixedTiming: FixedTiming | null): this;
    getAdditionalScopes(): Scope[] | null;
    setAdditionalScopes(additionalScopes: Scope[] | null): this;
    withAdditionalScopes(additionalScopes: Scope[] | null): this;
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
