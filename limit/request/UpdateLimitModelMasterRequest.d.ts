import IRequest from '../../core/interface/IRequest';
export default class UpdateLimitModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private limitName;
    private description;
    private metadata;
    private resetType;
    private resetDayOfMonth;
    private resetDayOfWeek;
    private resetHour;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getLimitName(): string | null;
    setLimitName(limitName: string | null): this;
    withLimitName(limitName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
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
    }): UpdateLimitModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
