import IModel from '../../core/interface/IModel';
import * as Gs2Mission from '../../mission/model';
export default class CounterScopeModel implements IModel {
    private scopeType;
    private resetType;
    private resetDayOfMonth;
    private resetDayOfWeek;
    private resetHour;
    private conditionName;
    private condition;
    getScopeType(): string | null;
    setScopeType(scopeType: string | null): this;
    withScopeType(scopeType: string | null): this;
    getResetType(): string | null;
    setResetType(resetType: string | null): this;
    withResetType(resetType: string | null): this;
    getResetDayOfMonth(): number | null;
    setResetDayOfMonth(resetDayOfMonth: number | null): this;
    withResetDayOfMonth(resetDayOfMonth: number | null): this;
    getResetDayOfWeek(): string | null;
    setResetDayOfWeek(resetDayOfWeek: string | null): this;
    withResetDayOfWeek(resetDayOfWeek: string | null): this;
    getResetHour(): number | null;
    setResetHour(resetHour: number | null): this;
    withResetHour(resetHour: number | null): this;
    getConditionName(): string | null;
    setConditionName(conditionName: string | null): this;
    withConditionName(conditionName: string | null): this;
    getCondition(): Gs2Mission.VerifyAction | null;
    setCondition(condition: Gs2Mission.VerifyAction | null): this;
    withCondition(condition: Gs2Mission.VerifyAction | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CounterScopeModel | null;
    toDict(): {
        [key: string]: any;
    };
}
