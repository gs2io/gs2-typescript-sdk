import IRequest from '../../core/interface/IRequest';
export default class CreateEventMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private name;
    private description;
    private metadata;
    private scheduleType;
    private absoluteBegin;
    private absoluteEnd;
    private repeatType;
    private repeatBeginDayOfMonth;
    private repeatEndDayOfMonth;
    private repeatBeginDayOfWeek;
    private repeatEndDayOfWeek;
    private repeatBeginHour;
    private repeatEndHour;
    private relativeTriggerName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getScheduleType(): string | null;
    setScheduleType(scheduleType: string | null): this;
    withScheduleType(scheduleType: string | null): this;
    getAbsoluteBegin(): number | null;
    setAbsoluteBegin(absoluteBegin: number | null): this;
    withAbsoluteBegin(absoluteBegin: number | null): this;
    getAbsoluteEnd(): number | null;
    setAbsoluteEnd(absoluteEnd: number | null): this;
    withAbsoluteEnd(absoluteEnd: number | null): this;
    getRepeatType(): string | null;
    setRepeatType(repeatType: string | null): this;
    withRepeatType(repeatType: string | null): this;
    getRepeatBeginDayOfMonth(): number | null;
    setRepeatBeginDayOfMonth(repeatBeginDayOfMonth: number | null): this;
    withRepeatBeginDayOfMonth(repeatBeginDayOfMonth: number | null): this;
    getRepeatEndDayOfMonth(): number | null;
    setRepeatEndDayOfMonth(repeatEndDayOfMonth: number | null): this;
    withRepeatEndDayOfMonth(repeatEndDayOfMonth: number | null): this;
    getRepeatBeginDayOfWeek(): string | null;
    setRepeatBeginDayOfWeek(repeatBeginDayOfWeek: string | null): this;
    withRepeatBeginDayOfWeek(repeatBeginDayOfWeek: string | null): this;
    getRepeatEndDayOfWeek(): string | null;
    setRepeatEndDayOfWeek(repeatEndDayOfWeek: string | null): this;
    withRepeatEndDayOfWeek(repeatEndDayOfWeek: string | null): this;
    getRepeatBeginHour(): number | null;
    setRepeatBeginHour(repeatBeginHour: number | null): this;
    withRepeatBeginHour(repeatBeginHour: number | null): this;
    getRepeatEndHour(): number | null;
    setRepeatEndHour(repeatEndHour: number | null): this;
    withRepeatEndHour(repeatEndHour: number | null): this;
    getRelativeTriggerName(): string | null;
    setRelativeTriggerName(relativeTriggerName: string | null): this;
    withRelativeTriggerName(relativeTriggerName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateEventMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
