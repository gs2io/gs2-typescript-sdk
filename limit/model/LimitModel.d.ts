import IModel from '../../core/interface/IModel';
export default class LimitModel implements IModel {
    private limitModelId;
    private name;
    private metadata;
    private resetType;
    private resetDayOfMonth;
    private resetDayOfWeek;
    private resetHour;
    getLimitModelId(): string | null;
    setLimitModelId(limitModelId: string | null): this;
    withLimitModelId(limitModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
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
    static fromDict(data: {
        [key: string]: any;
    }): LimitModel | null;
    toDict(): {
        [key: string]: any;
    };
}
