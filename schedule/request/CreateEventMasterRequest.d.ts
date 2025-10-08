import IRequest from '../../core/interface/IRequest';
import * as Gs2Schedule from '../model';
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
    private repeatSetting;
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
    /** @deprecated */
    getRepeatType(): string | null;
    /** @deprecated */
    setRepeatType(repeatType: string | null): this;
    /** @deprecated */
    withRepeatType(repeatType: string | null): this;
    /** @deprecated */
    getRepeatBeginDayOfMonth(): number | null;
    /** @deprecated */
    setRepeatBeginDayOfMonth(repeatBeginDayOfMonth: number | null): this;
    /** @deprecated */
    withRepeatBeginDayOfMonth(repeatBeginDayOfMonth: number | null): this;
    /** @deprecated */
    getRepeatEndDayOfMonth(): number | null;
    /** @deprecated */
    setRepeatEndDayOfMonth(repeatEndDayOfMonth: number | null): this;
    /** @deprecated */
    withRepeatEndDayOfMonth(repeatEndDayOfMonth: number | null): this;
    /** @deprecated */
    getRepeatBeginDayOfWeek(): string | null;
    /** @deprecated */
    setRepeatBeginDayOfWeek(repeatBeginDayOfWeek: string | null): this;
    /** @deprecated */
    withRepeatBeginDayOfWeek(repeatBeginDayOfWeek: string | null): this;
    /** @deprecated */
    getRepeatEndDayOfWeek(): string | null;
    /** @deprecated */
    setRepeatEndDayOfWeek(repeatEndDayOfWeek: string | null): this;
    /** @deprecated */
    withRepeatEndDayOfWeek(repeatEndDayOfWeek: string | null): this;
    /** @deprecated */
    getRepeatBeginHour(): number | null;
    /** @deprecated */
    setRepeatBeginHour(repeatBeginHour: number | null): this;
    /** @deprecated */
    withRepeatBeginHour(repeatBeginHour: number | null): this;
    /** @deprecated */
    getRepeatEndHour(): number | null;
    /** @deprecated */
    setRepeatEndHour(repeatEndHour: number | null): this;
    /** @deprecated */
    withRepeatEndHour(repeatEndHour: number | null): this;
    getRelativeTriggerName(): string | null;
    setRelativeTriggerName(relativeTriggerName: string | null): this;
    withRelativeTriggerName(relativeTriggerName: string | null): this;
    getRepeatSetting(): Gs2Schedule.RepeatSetting | null;
    setRepeatSetting(repeatSetting: Gs2Schedule.RepeatSetting | null): this;
    withRepeatSetting(repeatSetting: Gs2Schedule.RepeatSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateEventMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
